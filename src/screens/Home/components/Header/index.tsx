import { FC } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components/native";
import { SignOut } from "phosphor-react-native";

import { useAuth } from "@hooks/useAuth";

import {
  Container,
  Wrapper,
  UserImage,
  UserInfo,
  Greeting,
  Username,
  SignOutButton,
} from "./styles";

export const Header: FC = () => {
  const { logOut } = useAuth();
  const { colors } = useTheme();

  const onPressLogOut = () => {
    Alert.alert(
      "Sair",
      "Deseja sair da aplicação?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => logOut(),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <Container>
      <Wrapper>
        <UserImage source={{ uri: "https://www.github.com/hmdarkfir3.png" }} />
        <UserInfo>
          <Greeting>Olá,</Greeting>
          <Username>Henrique</Username>
        </UserInfo>
      </Wrapper>

      <SignOutButton activeOpacity={0.7} onPress={onPressLogOut}>
        <SignOut size={24} color={colors.screens.home.components.header.icon} />
      </SignOutButton>
    </Container>
  );
};
