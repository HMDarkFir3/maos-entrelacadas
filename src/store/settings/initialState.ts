import { DefaultTheme } from "styled-components/native";

import { light } from "@themes/light";

export interface FontSizeData {
  name: "Pequeno" | "Normal" | "Grande";
  value: "sm" | "md" | "lg";
}

export interface SettingsState {
  sawIntroduction: boolean;
  theme: DefaultTheme;
  fontSize: FontSizeData;
}

export const initialState: SettingsState = {
  sawIntroduction: false,
  theme: light,
  fontSize: { name: "Normal", value: "md" },
};
