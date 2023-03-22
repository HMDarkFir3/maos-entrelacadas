import styled, { css } from "styled-components/native";
import { Pressable } from "react-native";

import { STATUS_BAR_HEIGHT } from "@utils/globalVariables";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${STATUS_BAR_HEIGHT + 24}px;
`;

export const Wrapper = styled.View`
  flex-direction: row;

  gap: 12px;
`;

export const ProfileButton = styled(Pressable)``;

export const UserImage = styled.Image`
  width: 48px;
  height: 48px;

  border-radius: 24px;
  border-width: 2px;
  border-color: ${({ theme }) =>
    theme.colors.screens.home.components.header.primary};
`;

export const UserInfo = styled.View``;

export const Greeting = styled.Text`
  font-size: 20px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.screens.home.components.header.text};
  `}
`;

export const Username = styled.Text`
  font-size: 20px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.screens.home.components.header.text};
  `}
`;

export const SignOutButton = styled(Pressable)``;
