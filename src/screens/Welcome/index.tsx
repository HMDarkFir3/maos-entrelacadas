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
  RegisterButton,
  RegisterButtonText,
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
        <Button
          style={{ marginBottom: 28 }}
          title="Login"
          onPress={() => onPressLogin("Login")}
        />

        <RegisterButton onPress={() => onPressLogin("Register")}>
          <RegisterButtonText isGreen={false}>
            Não tem uma conta?{" "}
            <RegisterButtonText isGreen>Registrar-se</RegisterButtonText>
          </RegisterButtonText>
        </RegisterButton>
      </ButtonWrapper>
    </Container>
  );
};
