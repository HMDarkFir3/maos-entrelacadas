import styled, { css } from 'styled-components/native';
import { Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface RegisterButtonTextProps {
  isGreen: boolean;
}

export const Container = styled.View`
  flex: 1;

  justify-content: space-between;

  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Logo = styled(Image)`
  align-self: center;

  width: 200px;
  height: 200px;

  margin-top: 120px;
`;

export const TextWrapper = styled.View``;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.primary600};
  `}
`;

export const Description = styled.Text`
  margin-top: 4px;

  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text500};
  `}
`;

export const ButtonWrapper = styled.View`
  width: 100%;

  margin-bottom: 28px;
`;

export const RegisterButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 56px;
  width: 100%;

  border-radius: 8px;
`;

export const RegisterButtonText = styled.Text<RegisterButtonTextProps>`
  text-align: center;

  ${({ theme, isGreen }) =>
    isGreen &&
    css`
      font-family: ${theme.fonts.bold};
      color: ${theme.colors.primary600};
    `}

  ${({ theme, isGreen }) =>
    !isGreen &&
    css`
      font-family: ${theme.fonts.regular};
      color: ${theme.colors.text500};
    `}
`;

export const SeparatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;

  margin: 24px 0;
`;

export const Separator = styled.View`
  flex: 1;

  height: 1px;

  background-color: ${({ theme }) => theme.colors.text200};
`;

export const SeparatorText = styled.Text`
  margin: 0 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text200};
  `}
`;

export const OAuthButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;
