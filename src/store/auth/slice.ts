import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserDTO } from '@dtos/UserDTO';

import { initialState } from '@store/auth/initialState';

import { InitialStateData } from '@store/auth/types';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setGenderField: (state: InitialStateData, action: PayloadAction<string>) => {
      return {
        ...state,
        gender: action.payload,
      };
    },
    setBirthdateField: (state: InitialStateData, action: PayloadAction<string>) => {
      return {
        ...state,
        birthdate: action.payload,
      };
    },
    setUser: (state: InitialStateData, action: PayloadAction<UserDTO | null>) => {
      return {
        ...state,
        user: action.payload?.user ?? null,
        accessToken: action.payload?.access_token ?? null,
        isSigned: !!action.payload,
      };
    },
    setError: (state: InitialStateData, action: PayloadAction<string | null>) => {
      return {
        ...state,
        error: action.payload ?? null,
      };
    },
    setIsLoading: (state: InitialStateData, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
  },
});
