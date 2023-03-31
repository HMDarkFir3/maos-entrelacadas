import { DefaultTheme } from "styled-components/native";

import { light } from "@themes/light";

interface FontSizeData {
  name: "Pequeno" | "Normal" | "Grande";
  value: "sm" | "md" | "lg";
}

enum ActionType {
  SET_SAW_INTRODUCTION = "SET_SAW_INTRODUCTION",
  SET_THEME = "SET_THEME",
  SET_FONT_SIZE = "SET_FONT_SIZE",
}

export interface SettingsState {
  sawIntroduction: boolean;
  theme: DefaultTheme;
  fontSize: FontSizeData;
}

export type SettingsAction =
  | {
      type: "SET_SAW_INTRODUCTION";
      payload: boolean;
    }
  | {
      type: "SET_THEME";
      payload: DefaultTheme;
    }
  | {
      type: "SET_FONT_SIZE";
      payload: FontSizeData;
    };

export const initialState = {
  sawIntroduction: false,
  theme: light,
  fontSize: { name: "Normal", value: "md" },
} as SettingsState;

export const settingsReducer = (
  state: SettingsState,
  action: SettingsAction
) => {
  switch (action.type) {
    case ActionType.SET_SAW_INTRODUCTION: {
      return {
        ...state,
        sawIntroduction: action.payload,
      };
    }
    case ActionType.SET_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case ActionType.SET_FONT_SIZE: {
      return {
        ...state,
        fontSize: action.payload,
      };
    }
    default: {
      throw new Error("action not supported");
    }
  }
};
