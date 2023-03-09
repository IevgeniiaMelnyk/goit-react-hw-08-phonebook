import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from '../../shared/services/authApi';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await authApi.signup(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await authApi.login(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
