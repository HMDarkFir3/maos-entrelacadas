import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserDTO } from '@dtos/UserDTO';

import { initialState } from '@store/auth/initialState';

import { InitialStateData } from '@store/auth/types';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: InitialStateData, action: PayloadAction<UserDTO | null>) => {
      return {
        ...state,
        user: action.payload?.user ?? null,
        accessToken: action.payload?.access_token ?? null,
        isSigned: !!action.payload,
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
