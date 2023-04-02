import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserDTO } from "@dtos/UserDTO";

import { initialState } from "@store/auth/initialState";

import { InitialStateData } from "@store/auth/types";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmailField: (state: InitialStateData, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPasswordField: (
      state: InitialStateData,
      action: PayloadAction<string>
    ) => {
      state.password = action.payload;
    },
    setGivenNameField: (
      state: InitialStateData,
      action: PayloadAction<string>
    ) => {
      state.givenName = action.payload;
    },
    setGenderField: (
      state: InitialStateData,
      action: PayloadAction<string>
    ) => {
      state.gender = action.payload;
    },
    setBirthdateField: (
      state: InitialStateData,
      action: PayloadAction<string>
    ) => {
      state.birthdate = action.payload;
    },
    setConfirmPasswordField: (
      state: InitialStateData,
      action: PayloadAction<string>
    ) => {
      state.confirmPassword = action.payload;
    },
    setUser: (
      state: InitialStateData,
      action: PayloadAction<UserDTO | null>
    ) => {
      state.user = action.payload;

      if (state.user) {
        state.isSigned = true;
      } else {
        state.isSigned = false;
      }
    },
    setEmptyFields: (state: InitialStateData) => {
      return {
        ...state,
        ...initialState,
      };
    },
    setIsLoading: (state: InitialStateData, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});
