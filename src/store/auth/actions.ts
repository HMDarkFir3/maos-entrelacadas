import { authSlice } from '@store/auth/slice';

export const {
  setEmailField,
  setPasswordField,
  setGivenNameField,
  setGenderField,
  setBirthdateField,
  setConfirmPasswordField,
  setUser,
  setEmptyFields,
  setIsLoading,
} = authSlice.actions;
