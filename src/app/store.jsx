import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/states/auth/authSlice";
import themeReducer from "../shared/states/themeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
});
