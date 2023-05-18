import { createAsyncThunk, ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import { api } from '@services/api';

import { RegisterDTO } from '@dtos/RegisterDTO';
import { UserDTO } from '@dtos/UserDTO';

import { RegisterFormState, InitialStateAuth } from '@store/auth/types';

const register = createAsyncThunk('auth/register', async (form: RegisterFormState) => {
  const userInfo = {
    username: form.username,
    password: form.password,
    email: form.email,
    cellphone: form.cellphone,
    person: {
      name: form.givenName,
      birthdate: form.birthdate,
      gender: {
        name: form.gender,
      },
    },
  } as RegisterDTO.Request;

  const { data } = await api.post<RegisterDTO.Response>('/users/create', {
    ...userInfo,
  } as RegisterDTO.Request);
  return data;
});

const registerBuilder = (builder: ActionReducerMapBuilder<InitialStateAuth>) => {
  builder
    .addCase(register.pending, (state: InitialStateAuth) => {
      state.isLoading = true;
    })
    .addCase(register.fulfilled, (state: InitialStateAuth, action: PayloadAction<UserDTO>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.access_token;
      state.isSigned = true;
      state.isLoading = false;
      console.log(action.payload);
    })
    .addCase(register.rejected, (state: InitialStateAuth, action) => {
      console.log('rejected', action.error);
      state.isLoading = false;
    });
};

export { register, registerBuilder };
