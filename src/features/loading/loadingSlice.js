import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loading: true,
  },
  reducers: {
    loadingTrue: (state) => {
      state.loading = true;
    },
    loadingFalse: (state) => {
      state.loading = false;
    },
  },
});

export const { loadingTrue, loadingFalse } = loadingSlice.actions;

export const selectLoading = (state) => state.loading.loading;

export default loadingSlice.reducer;
