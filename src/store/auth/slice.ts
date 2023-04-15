import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserDTO } from '@dtos/UserDTO';

import { initialState } from '@store/auth/initialState';

import { login, register } from '@store/auth/thunks';

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
    builder
      .addCase(login.pending, (state: InitialStateData) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state: InitialStateData, action: PayloadAction<UserDTO>) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.access_token;
        state.isSigned = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state: InitialStateData) => {
        state.isLoading = false;
      });

    builder
      .addCase(register.pending, (state: InitialStateData) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state: InitialStateData, action: PayloadAction<UserDTO>) => {
        console.log(action.payload);
        state.isLoading = false;
      })
      .addCase(register.rejected, (state: InitialStateData) => {
        state.isLoading = false;
      });
  },
});
