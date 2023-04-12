import { configureStore } from "@reduxjs/toolkit";

// Slices
import authSlice from "./auth/authSlice";
import userSlice from "./user/userSlice";
import { userAPI } from "./services/userAPI";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
