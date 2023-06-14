import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserDTO, User } from '@dtos/UserDTO';

import { initialState } from '@store/auth/initialState';
import { loginBuilder } from '@store/auth/thunks/login';
import { registerBuilder } from '@store/auth/thunks/register';
import { updateBuilder } from '@store/auth/thunks/update';
import { InitialStateAuth } from '@store/auth/types';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: InitialStateAuth, action: PayloadAction<UserDTO>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.access_token;
      state.isSigned = true;
    },
    setAvatarUser: (state: InitialStateAuth, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
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
