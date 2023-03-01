import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { useCallback, FC } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

export const Home: FC = () => {
  const { colors } = useTheme();

  useFocusEffect(
    useCallback(() => {
      NavigationBar.setBackgroundColorAsync(
        colors.navigationBar.backgroundPrimary
      );
      NavigationBar.setButtonStyleAsync("dark");
    }, [])
  );

  return (
    <Container>
      <StatusBar
        backgroundColor={colors.statusBar.backgroundPrimary}
        style="dark"
      />
    </Container>
  );
};
