import styled, { css } from "styled-components/native";
import { Image, TouchableOpacity } from "react-native";

interface RegisterButtonTextProps {
  isGreen: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Logo = styled(Image)`
  width: 200px;
  height: 200px;

  margin-top: 120px;
`;

export const TextWrapper = styled.View``;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.screens.welcome.textPrimary};
  `}
`;

export const Description = styled.Text`
  margin-top: 4px;

  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.screens.welcome.textSecondary};
  `}
`;

export const ButtonWrapper = styled.View`
  align-items: center;

  width: 100%;

  margin-bottom: 28px;
`;

export const RegisterButton = styled(TouchableOpacity)`
  flex-direction: row;
`;

export const RegisterButtonText = styled.Text<RegisterButtonTextProps>`
  text-align: center;

  ${({ theme, isGreen }) =>
    isGreen &&
    css`
      font-family: ${theme.fonts.bold};
      color: ${theme.colors.screens.welcome.textPrimary};
    `}

  ${({ theme, isGreen }) =>
    !isGreen &&
    css`
      font-family: ${theme.fonts.regular};
      color: ${theme.colors.screens.welcome.textSecondary};
    `}
`;
