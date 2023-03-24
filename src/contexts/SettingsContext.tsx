import { createContext, useState, useEffect, FC, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider, DefaultTheme } from "styled-components/native";

import { COLLECTION_THEME, COLLECTION_FONT_SIZE } from "@storages/index";

import { light } from "@themes/light";
import { dark } from "@themes/dark";

interface FontSizeData {
  name: "Pequeno" | "Normal" | "Grande";
  value: "sm" | "md" | "lg";
}
export interface SettingsContextData {
  theme: DefaultTheme;
  fontSize: FontSizeData;
  toggleTheme: () => Promise<void>;
  changeFontSize: (
    name: "Pequeno" | "Normal" | "Grande",
    size: "sm" | "md" | "lg"
  ) => Promise<void>;
  fontSizeValue: (size: number) => number;
}

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsContext = createContext({} as SettingsContextData);

export const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(light);
  const [fontSize, setFontSize] = useState<FontSizeData>({
    name: "Normal",
    value: "md",
  });

  const getThemeInStorage = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_THEME);

    if (storage) {
      setTheme(storage === "light" ? dark : light);
    }
  };

  const getFontSizeInStorage = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_FONT_SIZE);

    if (storage) {
      console.log(JSON.parse(storage));

      setFontSize(JSON.parse(storage));
    }
  };

  const toggleTheme = async () => {
    setTheme(theme.title === "light" ? dark : light);

    await AsyncStorage.setItem(COLLECTION_THEME, theme.title);
  };

  const changeFontSize = async (
    name: "Pequeno" | "Normal" | "Grande",
    size: "sm" | "md" | "lg"
  ) => {
    setFontSize({ name, value: size });

    const data = {
      name,
      value: size,
    };

    await AsyncStorage.setItem(COLLECTION_FONT_SIZE, JSON.stringify(data));
  };

  const fontSizeValue = (size: number) => {
    switch (fontSize.value) {
      case "sm": {
        return size * 0.8;
      }
      case "md": {
        return size;
      }
      case "lg": {
        return size * 1.2;
      }
    }
  };

  useEffect(() => {
    getThemeInStorage();
  }, []);

  useEffect(() => {
    getFontSizeInStorage();
  }, []);

  return (
    <SettingsContext.Provider
      value={{ theme, fontSize, toggleTheme, changeFontSize, fontSizeValue }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SettingsContext.Provider>
  );
};
