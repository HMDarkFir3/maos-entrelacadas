import { FC } from "react";
import { useTheme } from "styled-components/native";
import { Info } from "phosphor-react-native";

import { useAuth } from "@hooks/useAuth";

import {
  Container,
  Wrapper,
  UserImage,
  UserInfo,
  Username,
  Role,
} from "./styles";

export const Header: FC = () => {
  const { state: authState } = useAuth();
  const { colors } = useTheme();

  return (
    <Container activeOpacity={0.7}>
      <Wrapper>
        <UserImage source={{ uri: "https://www.github.com/hmdarkfir3.png" }} />

        <UserInfo>
          <Username>{authState.user?.given_name}</Username>
          <Role>Associado</Role>
        </UserInfo>
      </Wrapper>

      <Info size={24} color={colors.screens.profile.components.header.icon} />
    </Container>
  );
};
