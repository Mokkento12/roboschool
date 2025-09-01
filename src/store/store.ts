import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
import formReducer from "./slices/formSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
