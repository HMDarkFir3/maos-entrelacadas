import * as NavigationBar from "expo-navigation-bar";
import { useCallback, FC } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { Button } from "@components/Buttons/Button";

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
  const { colors } = useTheme();

  const onPressLogin = (screenName: "Login" | "StepOne") =>
    navigate(screenName);

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

        <RegisterButton onPress={() => onPressLogin("StepOne")}>
          <RegisterButtonText isGreen={false}>
            Não tem uma conta?{" "}
            <RegisterButtonText isGreen>Registrar-se</RegisterButtonText>
          </RegisterButtonText>
        </RegisterButton>
      </ButtonWrapper>
    </Container>
  );
};
