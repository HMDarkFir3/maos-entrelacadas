import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${getStatusBarHeight() + 24}px;
`;

export const Wrapper = styled.View`
  flex-direction: row;

  gap: 12px;
`;

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

export const SignOutButton = styled(TouchableOpacity)``;
