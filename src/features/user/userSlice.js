import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    }
  },
});

export const { loginUser, logoutUser, setEmail } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectEmail = (state) => state.email.email;

export default userSlice.reducer;
