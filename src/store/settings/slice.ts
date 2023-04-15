import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GenderDTO } from '@dtos/GenderDTO';

import { initialState } from '@store/settings/initialState';

import { InitialStateData, FontSizeData } from '@store/settings/types';

import { light } from '@themes/light';
import { dark } from '@themes/dark';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSawIntroduction: (state: InitialStateData) => {
      state.sawIntroduction = true;
    },
    toggleTheme: (state: InitialStateData) => {
      const formattedTheme = state.theme.title === 'light' ? dark : light;

      state.theme = formattedTheme;
    },
    changeFontSize: (state: InitialStateData, action: PayloadAction<FontSizeData>) => {
      state.fontSize = action.payload;
    },

    setGenders: (state: InitialStateData, action: PayloadAction<GenderDTO.Response[]>) => {
      state.genders = action.payload;
    },
  },
});

export const selectFontSize = (state: InitialStateData) => state.fontSize;
