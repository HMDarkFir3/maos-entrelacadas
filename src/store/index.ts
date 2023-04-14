import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { authSlice } from '@store/auth/slice';
import { settingsSlice } from '@store/settings/slice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  settings: settingsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
