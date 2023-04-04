import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserDTO } from '@dtos/UserDTO';

import { initialState } from '@store/auth/initialState';

import { InitialStateData } from '@store/auth/types';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmailField: (state: InitialStateData, action: PayloadAction<string>) => {
      return {
        ...state,
        email: action.payload,
      };
    },
    setPasswordField: (state: InitialStateData, action: PayloadAction<string>) => {
      return {
        ...state,
        password: action.payload,
      };
    },
    setGivenNameField: (state: InitialStateData, action: PayloadAction<string>) => {
      return {
        ...state,
        givenName: action.payload,
      };
    },
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
    setConfirmPasswordField: (state: InitialStateData, action: PayloadAction<string>) => {
      return {
        ...state,
        confirmPassword: action.payload,
      };
    },
    setUser: (state: InitialStateData, action: PayloadAction<UserDTO | null>) => {
      return {
        ...state,
        user: action.payload,
        isSigned: !!action.payload,
      };
    },
    setEmptyFields: (state: InitialStateData) => {
      return {
        ...state,
        ...initialState,
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
