import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { useCallback, FC } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { useAppSelector } from "@hooks/useAppSelector";
import { useSettings } from "@hooks/useSettings";

import { AuthRoutes } from "@routes/Auth.routes";
import { AppRoutes } from "@routes/App.routes";

export const Routes: FC = () => {
  const { isSigned } = useAppSelector((store) => store.auth);
  const { state: settingsState } = useSettings();
  const { colors } = useTheme();

  useFocusEffect(
    useCallback(() => {
      NavigationBar.setBackgroundColorAsync(
        settingsState.theme.colors.navigationBar.backgroundPrimary
      );
      NavigationBar.setButtonStyleAsync(
        settingsState.theme.title === "light" ? "dark" : "light"
      );
    }, [settingsState.theme.title])
  );

  return (
    <>
      <StatusBar
        backgroundColor={colors.statusBar.backgroundPrimary}
        style={settingsState.theme.title === "light" ? "dark" : "light"}
      />

      {isSigned ? <AppRoutes /> : <AuthRoutes />}
    </>
  );
};
