import { Action, ThunkAction } from '@reduxjs/toolkit';

import { store } from '@store/index';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
