import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '@store/auth/initialState';
import { loginBuilder } from '@store/auth/thunks/login';
import { registerBuilder } from '@store/auth/thunks/register';
import { InitialStateData } from '@store/auth/types';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state: InitialStateData) => {
      state.user = null;
      state.accessToken = null;
      state.isSigned = false;
    },
  },
  extraReducers: (builder) => {
    loginBuilder(builder);
    registerBuilder(builder);
  },
});
