import { InitialStateData } from '@store/auth/types';

export const initialState: InitialStateData = {
  user: null,
  accessToken: null,
  isSigned: false,
  isLoading: false,
};
