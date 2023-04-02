import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components/native";

import { initialState } from "@store/settings/initialState";

import { InitialStateData, FontSizeData } from "@store/settings/types";

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSawIntroduction: (
      state: InitialStateData,
      action: PayloadAction<boolean>
    ) => {
      state.sawIntroduction = action.payload;
    },
    setTheme: (
      state: InitialStateData,
      action: PayloadAction<DefaultTheme>
    ) => {
      state.theme = action.payload;
    },
    setFontSize: (
      state: InitialStateData,
      action: PayloadAction<FontSizeData>
    ) => {
      state.fontSize = action.payload;
    },
  },
});
