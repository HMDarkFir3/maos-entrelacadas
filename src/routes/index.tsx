import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { useAuth } from "@hooks/useAuth";
import { useSettings } from "@hooks/useSettings";

import { AuthRoutes } from "@routes/auth.routes";
import { AppRoutes } from "@routes/app.routes";

export const Routes: FC = () => {
  const { state: authState } = useAuth();
  const { theme } = useSettings();
  const { colors } = useTheme();

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={colors.statusBar.backgroundPrimary}
        style={theme.title === "light" ? "dark" : "light"}
      />
      {authState.user?.uid ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
