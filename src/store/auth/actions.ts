import { authSlice } from '@store/auth/slice';

export const { setGenderField, setBirthdateField, setUser, setError, setIsLoading } =
  authSlice.actions;
