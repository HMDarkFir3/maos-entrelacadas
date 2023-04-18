import { createAsyncThunk, ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import { api } from '@services/api';

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
  };

  const { data } = await api.post('/users/create', { ...userInfo });

  return data;
});

const registerBuilder = (builder: ActionReducerMapBuilder<InitialStateAuth>) => {
  builder
    .addCase(register.pending, (state: InitialStateAuth) => {
      state.isLoading = true;
    })
    .addCase(register.fulfilled, (state: InitialStateAuth, action: PayloadAction<UserDTO>) => {
      state.user = action.payload.userCreated;
      state.accessToken = action.payload.access_token;
      state.isSigned = true;
      state.isLoading = false;
    })
    .addCase(register.rejected, (state: InitialStateAuth, action) => {
      console.log('rejected', action.payload);
      state.isLoading = false;
    });
};

export { register, registerBuilder };
