import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components/native";

import {
  initialState,
  SettingsState,
  FontSizeData,
} from "@store/settings/initialState";

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSawIntroduction: (
      state: SettingsState,
      action: PayloadAction<boolean>
    ) => {
      state.sawIntroduction = action.payload;
    },
    setTheme: (state: SettingsState, action: PayloadAction<DefaultTheme>) => {
      state.theme = action.payload;
    },
    setFontSize: (
      state: SettingsState,
      action: PayloadAction<FontSizeData>
    ) => {
      state.fontSize = action.payload;
    },
  },
});
