import * as NavigationBar from "expo-navigation-bar";
import { useCallback, FC } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { Header } from "@components-of-screens/Home/components/Header";

import { Container } from "./styles";

export const Home: FC = () => {
  const { colors } = useTheme();

  useFocusEffect(
    useCallback(() => {
      NavigationBar.setBackgroundColorAsync(
        colors.navigationBar.backgroundPrimary
      );
      NavigationBar.setButtonStyleAsync("light");
    }, [])
  );

  return (
    <Container>
      <Header />
    </Container>
  );
};
