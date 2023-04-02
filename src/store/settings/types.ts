import { DefaultTheme } from "styled-components/native";

export interface FontSizeData {
  name: "Pequeno" | "Normal" | "Grande";
  value: "sm" | "md" | "lg";
}

export interface InitialStateData {
  sawIntroduction: boolean;
  theme: DefaultTheme;
  fontSize: FontSizeData;
}
