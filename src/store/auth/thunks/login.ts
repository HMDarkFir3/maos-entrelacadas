import { createAsyncThunk, ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import { api } from '@services/api';

import { LoginDTO } from '@dtos/LoginDTO';
import { UserDTO } from '@dtos/UserDTO';

import { LoginFormState, InitialStateAuth } from '@store/auth/types';

const login = createAsyncThunk('auth/login', async (form: LoginFormState) => {
  const { data } = await api.post<LoginDTO.Response>('/auth/login', {
    email: form.email,
    password: form.password,
  } as LoginDTO.Request);

  return data;
});

const loginBuilder = (builder: ActionReducerMapBuilder<InitialStateAuth>) => {
  builder
    .addCase(login.pending, (state: InitialStateAuth) => {
      state.isLoading = true;
    })
    .addCase(login.fulfilled, (state: InitialStateAuth, action: PayloadAction<UserDTO>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.access_token;
      state.isSigned = true;
      state.isLoading = false;
      console.log(action.payload);
    })
    .addCase(login.rejected, (state: InitialStateAuth, action) => {
      console.log(action.error.message);
      state.isLoading = false;
    });
};

export { login, loginBuilder };
