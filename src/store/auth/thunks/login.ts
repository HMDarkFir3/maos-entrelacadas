import { createAsyncThunk, ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import { LoginDTO } from '@dtos/LoginDTO';

import { api } from '@services/api';

import { UserDTO } from '@dtos/UserDTO';

import { LoginFormState, InitialStateData } from '@store/auth/types';

const login = createAsyncThunk('auth/login', async (form: LoginFormState) => {
  const { data } = await api.post<LoginDTO.Response>('/auth/login', {
    email: form.email,
    password: form.password,
  } as LoginDTO.Request);

  return data;
});

const loginBuilder = (builder: ActionReducerMapBuilder<InitialStateData>) => {
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
};

export { login, loginBuilder };
