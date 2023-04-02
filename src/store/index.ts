import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "@store/auth/slice";
import { settingsSlice } from "@store/settings/slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    settings: settingsSlice.reducer,
  },
});
