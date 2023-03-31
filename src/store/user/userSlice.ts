import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
}

const initialState: UserState = {
  name: "usuário",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    removeUser: (state) => {
      state.name = "usuário";
      state.email = "";
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
