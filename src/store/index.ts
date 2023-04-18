import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { authSlice } from '@store/auth/slice';
import { settingsSlice } from '@store/settings/slice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  settings: settingsSlice.reducer,
});

const persistConfig: PersistConfig<any> = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  timeout: 9000,
  blacklist: ['genders', 'isLoading'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
