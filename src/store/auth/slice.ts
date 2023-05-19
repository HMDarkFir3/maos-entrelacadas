import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from '@store/auth/initialState';
import { loginBuilder } from '@store/auth/thunks/login';
import { registerBuilder } from '@store/auth/thunks/register';
import { updateBuilder } from '@store/auth/thunks/update';
import { InitialStateAuth } from '@store/auth/types';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userEdit: (state: InitialStateAuth, action: PayloadAction<boolean>) => {
      state.isEditable = action.payload;
    },
    logout: (state: InitialStateAuth) => {
      state.user = null;
      state.accessToken = null;
      state.isSigned = false;
    },
  },
  extraReducers: (builder) => {
    loginBuilder(builder);
    registerBuilder(builder);
    updateBuilder(builder);
  },
});
