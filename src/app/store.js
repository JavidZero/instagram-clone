import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import loadingReducer from '../features/loading/loadingSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
  },
});
