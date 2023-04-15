import { createContext, useEffect, useCallback, FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { api } from '@services/api';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';

import { setGenders } from '@store/settings/actions';

export interface SettingsContextData {
  fontSizeValue: (size: number) => number | undefined;
}

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsContext = createContext({} as SettingsContextData);

export const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { theme, fontSize } = useAppSelector((store) => store.settings);

  const fontSizeValue = useCallback(
    (size: number) => {
      switch (fontSize.value) {
        case 'sm': {
          return size * 0.8;
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
        fontSizeValue,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SettingsContext.Provider>
  );
};
