import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GenderDTO } from '@dtos/GenderDTO';

import { initialState } from '@store/settings/initialState';
import { InitialStateSettings, FontSizeData } from '@store/settings/types';

import { light } from '@themes/light';
import { dark } from '@themes/dark';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSawIntroduction: (state: InitialStateSettings) => {
      state.sawIntroduction = true;
    },
    toggleTheme: (state: InitialStateSettings) => {
      const formattedTheme = state.theme.title === 'light' ? dark : light;

      state.theme = formattedTheme;
    },
    changeFontSize: (state: InitialStateSettings, action: PayloadAction<FontSizeData>) => {
      state.fontSize = action.payload;
    },

    setGenders: (state: InitialStateSettings, action: PayloadAction<GenderDTO.Response[]>) => {
      state.genders = action.payload;
    },
  },
});
