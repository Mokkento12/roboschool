import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { FormState, FormFields } from "@/types";

const initialState: FormState = {
  formData: { name: "", phone: "", email: "" },
  status: "idle",
  error: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: keyof FormFields; value: string }>
    ) => {
      state.formData[action.payload.field] = action.payload.value;

      if (state.status === "error") {
        state.status = "idle";
        state.error = null;
      }
    },
    submitForm: (state) => {
      state.status = "loading";
      state.error = null;
    },
    submitSuccess: (state) => {
      state.status = "success";
      state.error = null;
      state.formData = { name: "", phone: "", email: "" };
    },
    submitError: (state, action: PayloadAction<string>) => {
      state.status = "error";
      state.error = action.payload;
    },
    reset: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
});

export const { updateField, submitForm, submitSuccess, submitError, reset } =
  formSlice.actions;

export default formSlice.reducer;
