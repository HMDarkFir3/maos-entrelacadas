import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState, TabBarState } from "@store/tabBar/initialState";

export const tabBarSlice = createSlice({
  name: "tabBar",
  initialState,
  reducers: {
    setIsActive: (
      state: TabBarState,
      action: PayloadAction<"Home" | "Events" | "Donations" | "Profile">
    ) => {
      state.isActive = action.payload;
    },
  },
});
