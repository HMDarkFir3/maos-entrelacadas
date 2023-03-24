import styled, { css } from "styled-components/native";
import { Pressable } from "react-native";

import { STATUS_BAR_HEIGHT } from "@utils/globalVariables";

export const Container = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${STATUS_BAR_HEIGHT + 12}px;
  padding: 12px 24px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 12px;
`;

export const UserImage = styled.Image`
  width: 48px;
  height: 48px;

  border-radius: 24px;
  border-width: 2px;
  border-color: ${({ theme }) =>
    theme.colors.screens.profile.components.header.primary};
`;

export const UserInfo = styled.View``;

export const Username = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.screens.profile.components.header.primary};
  `}
`;

export const Role = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.screens.profile.components.header.text};
  `}
`;
