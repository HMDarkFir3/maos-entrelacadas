import { FC } from "react";
import { useTheme } from "styled-components/native";
import { SignOut } from "phosphor-react-native";

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
  const { colors } = useTheme();

  return (
    <Container>
      <Wrapper>
        <UserImage source={{ uri: "https://www.github.com/hmdarkfir3.png" }} />
        <UserInfo>
          <Greeting>Olá,</Greeting>
          <Username>Henrique</Username>
        </UserInfo>
      </Wrapper>

      <SignOutButton activeOpacity={0.7}>
        <SignOut size={24} color={colors.screens.home.components.header.icon} />
      </SignOutButton>
    </Container>
  );
};
