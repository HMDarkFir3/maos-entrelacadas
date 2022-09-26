import * as StatusBar from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { useLayoutEffect, FC } from "react";

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
  useLayoutEffect(() => {
    StatusBar.setStatusBarStyle("dark");
    StatusBar.setStatusBarBackgroundColor("#fafafa", true);
    NavigationBar.setBackgroundColorAsync("#fafafa");
    NavigationBar.setButtonStyleAsync("dark");
  }, []);

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
        <Button type="normal" title="Login" />
        <Button style={{ marginTop: 28 }} type="register" />
      </ButtonWrapper>
    </Container>
  );
};
