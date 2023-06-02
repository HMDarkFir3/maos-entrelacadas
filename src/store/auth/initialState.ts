import { InitialStateAuth } from '@store/auth/types';

export const initialState: InitialStateAuth = {
  user: null,
  accessToken: null,
  isSigned: false,
  isEditable: false,
  isLoading: false,
  isEmptyData: true,
};
