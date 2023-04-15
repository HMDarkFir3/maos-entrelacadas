import { createAsyncThunk, ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import { api } from '@services/api';

import { UserDTO } from '@dtos/UserDTO';

import { RegisterFormState, InitialStateData } from '@store/auth/types';

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

const registerBuilder = (builder: ActionReducerMapBuilder<InitialStateData>) => {
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
};

export { register, registerBuilder };
