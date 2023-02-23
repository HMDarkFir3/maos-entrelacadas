import * as StatusBar from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { useCallback, FC } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Button } from "@components/Button";

import {
  Container,
  Logo,
  TextWrapper,
  Title,
  Description,
  ButtonWrapper,
} from "./styles";

export const Welcome: FC = () => {
  const { navigate } = useNavigation();

  const onPressLogin = (screenName: "Login" | "Register") =>
    navigate(screenName);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setStatusBarStyle("dark");
      StatusBar.setStatusBarBackgroundColor("#fafafa", true);
      NavigationBar.setBackgroundColorAsync("#fafafa");
      NavigationBar.setButtonStyleAsync("dark");
    }, [])
  );

  return (
    <Container>
      <Logo source={require("@assets/img/logo.png")} />

      <TextWrapper>
        <Title>Boas-vindas!</Title>
        <Description>
          Queremos impactar de forma positiva a sua vida e de sua comunidade.
        </Description>
      </TextWrapper>

      <ButtonWrapper>
        <Button title="Login" onPress={() => onPressLogin("Login")} />
        <Button
          style={{ marginTop: 28 }}
          onPress={() => onPressLogin("Register")}
        />
      </ButtonWrapper>
    </Container>
  );
};
