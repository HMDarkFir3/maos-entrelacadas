import styled, { css } from "styled-components/native";
import { Image } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;

  padding: 0 32px;

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
  font-size: 48px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.screens.welcome.title};
  `}
`;

export const Description = styled.Text`
  margin-top: 4px;

  text-align: center;
  font-size: 20px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.screens.welcome.description};
  `}
`;

export const ButtonWrapper = styled.View`
  width: 100%;

  margin-bottom: 36px;
`;
