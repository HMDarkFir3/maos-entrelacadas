import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "@store/auth/slice";
import { tabBarSlice } from "@store/tabBar/slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    tabBar: tabBarSlice.reducer,
  },
});
