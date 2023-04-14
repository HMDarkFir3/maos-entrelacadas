import { InitialStateData } from '@store/auth/types';

export const initialState: InitialStateData = {
  user: null,
  accessToken: null,
  error: null,
  gender: null,
  birthdate: null,
  isSigned: false,
  isLoading: false,
};
