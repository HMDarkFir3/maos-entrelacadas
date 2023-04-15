import { createAsyncThunk } from '@reduxjs/toolkit';

import { LoginDTO } from '@dtos/LoginDTO';

import { api } from '@services/api';

import { LoginFormState, RegisterFormState } from '@store/auth/types';

const login = createAsyncThunk('auth/login', async (form: LoginFormState) => {
  const { data } = await api.post<LoginDTO.Response>('/auth/login', {
    email: form.email,
    password: form.password,
  } as LoginDTO.Request);

  return data;
});

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

export { login, register };
