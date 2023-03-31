import { configureStore } from "@reduxjs/toolkit";

// Slices
import authSlice from "./auth/authSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
