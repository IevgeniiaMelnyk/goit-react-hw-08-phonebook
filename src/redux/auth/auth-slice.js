import { createSlice } from '@reduxjs/toolkit';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { signup, login } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const handlePending = store => {
  store.loading = true;
  store.error = null;
};

const handleRejected = (store, { payload }) => {
  store.loading = false;
  store.error = payload;
  NotificationManager.error(payload);
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, handlePending)
      .addCase(signup.fulfilled, (store, { payload }) => {
        const { user, token } = payload;
        store.loading = false;
        store.user = user;
        store.token = token;
        store.isLogin = true;
      })
      .addCase(signup.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (store, { payload }) => {
        const { user, token } = payload;
        store.loading = false;
        store.user = user;
        store.token = token;
        store.isLogin = true;
      })
      .addCase(login.rejected, handleRejected);
  },
});

export default authSlice.reducer;
