import { createContext, useEffect, useCallback, FC, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from 'styled-components/native';

import { api } from '@services/api';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';

import { setGenders, setTheme, setFontSize } from '@store/settings/actions';

import { COLLECTION_FONT_SIZE } from '@storages/index';

import { light } from '@themes/light';
import { dark } from '@themes/dark';

export interface SettingsContextData {
  toggleTheme: () => Promise<void>;
  changeFontSize: (
    name: 'Pequeno' | 'Normal' | 'Grande',
    size: 'sm' | 'md' | 'lg'
  ) => Promise<void>;
  fontSizeValue: (size: number) => number;
}

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsContext = createContext({} as SettingsContextData);

export const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { theme, fontSize } = useAppSelector((store) => store.settings);

  const toggleTheme = useCallback(async () => {
    const formattedTheme = theme.title === 'light' ? dark : light;

    dispatch(setTheme(formattedTheme));
  }, [dispatch, theme.title]);

  const changeFontSize = useCallback(
    async (name: 'Pequeno' | 'Normal' | 'Grande', size: 'sm' | 'md' | 'lg') => {
      const data = {
        name,
        value: size,
      };
      dispatch(setFontSize(data));

      await AsyncStorage.setItem(COLLECTION_FONT_SIZE, JSON.stringify(data));
    },
    [dispatch]
  );

  const fontSizeValue = useCallback(
    (size: number) => {
      switch (fontSize.value) {
        case 'sm': {
          return size * 0.8;
        }
        case 'md': {
          return size;
        }
        case 'lg': {
          return size * 1.2;
        }
        default: {
          return size;
        }
      }
    },
    [fontSize.value]
  );

  useEffect(() => {
    // const getThemeInStorage = async () => {
    //   const storage = await AsyncStorage.getItem(COLLECTION_THEME);
    //   const formattedTheme = storage === 'light' ? light : dark;

    //   if (storage) {
    //     dispatch(setTheme(formattedTheme));
    //   }
    // };

    const getFontSizeInStorage = async () => {
      const storage = await AsyncStorage.getItem(COLLECTION_FONT_SIZE);

      if (storage) {
        dispatch(setFontSize(JSON.parse(storage)));
      }
    };

    // getSawIntroductionInStorage();
    // getThemeInStorage();
    getFontSizeInStorage();
  }, [dispatch]);

  useEffect(() => {
    const fetchGenders = async () => {
      try {
        const { data } = await api.get('/genders');

        dispatch(setGenders(data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchGenders();
  }, [dispatch]);

  return (
    <SettingsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        toggleTheme,
        changeFontSize,
        fontSizeValue,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SettingsContext.Provider>
  );
};
