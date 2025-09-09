import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
import formReducer from "./slices/formSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    form: formReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
