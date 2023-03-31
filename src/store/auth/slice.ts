import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserDTO } from "@dtos/UserDTO";

import { initialState, AuthState } from "@store/auth/initialState";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmailField: (state: AuthState, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPasswordField: (state: AuthState, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setGivenNameField: (state: AuthState, action: PayloadAction<string>) => {
      state.givenName = action.payload;
    },
    setGenderField: (state: AuthState, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setBirthdateField: (state: AuthState, action: PayloadAction<string>) => {
      state.birthdate = action.payload;
    },
    setConfirmPasswordField: (
      state: AuthState,
      action: PayloadAction<string>
    ) => {
      state.confirmPassword = action.payload;
    },
    setUser: (state: AuthState, action: PayloadAction<UserDTO | null>) => {
      state.user = action.payload;

      if (state.user) {
        state.isSigned = true;
      } else {
        state.isSigned = false;
      }
    },
    setEmptyFields: (state: AuthState) => {
      return {
        ...state,
        ...initialState,
      };
    },
    setIsLoading: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});
