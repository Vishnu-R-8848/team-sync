import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/states/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // theme: themeReducer,
  },
});
