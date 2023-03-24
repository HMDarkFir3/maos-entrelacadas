import { createContext, useState, useEffect, FC, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider, DefaultTheme } from "styled-components/native";

import { COLLECTION_THEME, COLLECTION_FONT_SIZE } from "@storages/index";

import { light } from "@themes/light";
import { dark } from "@themes/dark";

export interface SettingsContextData {
  theme: DefaultTheme;
  toggleTheme: () => Promise<void>;
  changeFontSize: (size: "sm" | "nm" | "lg") => Promise<void>;
  fontSizeValue: (size: number) => number;
}

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsContext = createContext({} as SettingsContextData);

export const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(light);
  const [fontSize, setFontSize] = useState<"sm" | "nm" | "lg">("nm");

  const getThemeInStorage = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_THEME);

    if (storage) {
      setTheme(storage === "light" ? dark : light);
    }
  };

  const getFontSizeInStorage = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_FONT_SIZE);

    if (storage) {
      setFontSize(JSON.parse(storage as "sm" | "nm" | "lg"));
    }
  };

  const toggleTheme = async () => {
    setTheme(theme.title === "light" ? dark : light);

    await AsyncStorage.setItem(COLLECTION_THEME, theme.title);
  };

  const changeFontSize = async (size: "sm" | "nm" | "lg") => {
    setFontSize(size);

    await AsyncStorage.setItem(COLLECTION_FONT_SIZE, size);
  };

  const fontSizeValue = (size: number) => {
    switch (fontSize) {
      case "sm": {
        return size * 0.8;
      }
      case "nm": {
        return size;
      }
      case "lg": {
        return size * 1.2;
      }
    }
  };

  useEffect(() => {
    getThemeInStorage();
    getFontSizeInStorage();
  }, []);

  return (
    <SettingsContext.Provider
      value={{ theme, toggleTheme, changeFontSize, fontSizeValue }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SettingsContext.Provider>
  );
};
