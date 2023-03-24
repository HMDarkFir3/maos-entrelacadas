import { FC } from "react";
import { useTheme } from "styled-components/native";
import { Info } from "phosphor-react-native";

import { useAuth } from "@hooks/useAuth";
import { useSettings } from "@hooks/useSettings";

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
  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  return (
    <Container activeOpacity={0.7}>
      <Wrapper>
        <UserImage source={{ uri: "https://www.github.com/hmdarkfir3.png" }} />

        <UserInfo>
          <Username style={{ fontSize: fontSizeValue(20) }} numberOfLines={1}>
            {authState.user?.given_name}
          </Username>
          <Role style={{ fontSize: fontSizeValue(16) }}>Associado</Role>
        </UserInfo>
      </Wrapper>

      <Info
        size={fontSizeValue(24)}
        color={colors.screens.profile.components.header.icon}
      />
    </Container>
  );
};