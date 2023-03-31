import {
  createContext,
  useEffect,
  useReducer,
  FC,
  Dispatch,
  ReactNode,
  Reducer,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider } from "styled-components/native";

import {
  settingsReducer,
  initialState,
  SettingsState,
  SettingsAction,
} from "@reducers/settingsReducer";

import {
  COLLECTION_THEME,
  COLLECTION_FONT_SIZE,
  COLLECTION_INTRODUCTION,
} from "@storages/index";

import { light } from "@themes/light";
import { dark } from "@themes/dark";

export interface SettingsContextData {
  state: SettingsState;
  dispatch: Dispatch<SettingsAction>;
  sawIntroductionInStorage: () => Promise<void>;
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
  const [state, dispatch] = useReducer<Reducer<SettingsState, SettingsAction>>(
    settingsReducer,
    initialState
  );

  const getSawIntroductionInStorage = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_INTRODUCTION);

    if (storage) {
      dispatch({ type: "SET_SAW_INTRODUCTION", payload: JSON.parse(storage) });
    }
  };

  const getThemeInStorage = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_THEME);

    if (storage) {
      const themeInStorage = storage === "light" ? light : dark;

      dispatch({ type: "SET_THEME", payload: themeInStorage });
    }
  };

  const getFontSizeInStorage = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_FONT_SIZE);

    if (storage) {
      dispatch({ type: "SET_FONT_SIZE", payload: JSON.parse(storage) });
    }
  };

  const sawIntroductionInStorage = async () => {
    dispatch({ type: "SET_SAW_INTRODUCTION", payload: true });

    await AsyncStorage.setItem(COLLECTION_INTRODUCTION, JSON.stringify(true));
  };

  const toggleTheme = async () => {
    const theme = state.theme.title === "light" ? dark : light;

    dispatch({ type: "SET_THEME", payload: theme });

    await AsyncStorage.setItem(COLLECTION_THEME, theme.title);
  };

  const changeFontSize = async (
    name: "Pequeno" | "Normal" | "Grande",
    size: "sm" | "md" | "lg"
  ) => {
    const data = {
      name,
      value: size,
    };
    dispatch({ type: "SET_FONT_SIZE", payload: data });

    await AsyncStorage.setItem(COLLECTION_FONT_SIZE, JSON.stringify(data));
  };

  const fontSizeValue = (size: number) => {
    switch (state.fontSize.value) {
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
    getSawIntroductionInStorage;
  });

  useEffect(() => {
    getThemeInStorage();
  }, []);

  useEffect(() => {
    getFontSizeInStorage();
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        state,
        dispatch,
        sawIntroductionInStorage,
        toggleTheme,
        changeFontSize,
        fontSizeValue,
      }}
    >
      <ThemeProvider theme={state.theme}>{children}</ThemeProvider>
    </SettingsContext.Provider>
  );
};
