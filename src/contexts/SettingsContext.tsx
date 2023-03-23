import { createContext, useState, useEffect, FC, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider, DefaultTheme } from "styled-components/native";

import { COLLECTION_THEME } from "@storages/index";

import { light } from "@themes/light";
import { dark } from "@themes/dark";

export interface SettingsContextData {
  theme: DefaultTheme;
  toggleTheme: () => Promise<void>;
}

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsContext = createContext({} as SettingsContextData);

export const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(light);

  const getThemeInStorage = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_THEME);

    if (storage) {
      setTheme(storage === "light" ? dark : light);
    }
  };

  const toggleTheme = async () => {
    setTheme(theme.title === "light" ? dark : light);

    await AsyncStorage.setItem(COLLECTION_THEME, theme.title);
  };

  useEffect(() => {
    getThemeInStorage();
  }, []);

  return (
    <SettingsContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SettingsContext.Provider>
  );
};
