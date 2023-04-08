import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import { useCallback, FC } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { useAppSelector } from '@hooks/useAppSelector';

import { AuthRoutes } from '@routes/Auth.routes';
import { AppRoutes } from '@routes/App.routes';

export const Routes: FC = () => {
  const { isSigned } = useAppSelector((store) => store.auth);
  const { theme } = useAppSelector((store) => store.settings);
  const { colors } = useTheme();

  useFocusEffect(
    useCallback(() => {
      NavigationBar.setBackgroundColorAsync(theme.colors.navigationBar.backgroundPrimary);
      NavigationBar.setButtonStyleAsync(theme.title === 'light' ? 'dark' : 'light');
    }, [theme.colors.navigationBar.backgroundPrimary, theme.title])
  );

  return (
    <>
      <StatusBar
        backgroundColor={colors.statusBar.backgroundPrimary}
        style={theme.title === 'light' ? 'dark' : 'light'}
      />

      {isSigned ? <AppRoutes /> : <AuthRoutes />}
    </>
  );
};
