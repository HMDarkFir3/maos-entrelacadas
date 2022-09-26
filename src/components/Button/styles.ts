import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

interface ContainerProps {
  type: "normal" | "register" | "small-button" | "jump";
}

interface TitleProps {
  type: "normal" | "register" | "small-button" | "jump";
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  align-items: center;
  justify-content: center;

  ${({ theme, type }) =>
    type === "normal" &&
    css`
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 56px;

      background-color: ${theme.colors.components.button.background};
      border-radius: 8px;
    `}

  ${({ type }) =>
    type === "small-button" &&
    css`
      width: 78px;
      height: 48px;

      background-color: ${({ theme }) =>
        theme.colors.components.button.background};
      border-top-left-radius: 100px;
      border-bottom-left-radius: 100px;
    `}

  ${({ type }) =>
    type === "jump" &&
    css`
      padding: 0 24px;

      background-color: transparent;
    `}
`;

export const Title = styled.Text<TitleProps>`
  ${({ theme, type }) =>
    type === "normal" &&
    css`
      font-size: 16px;
      font-family: ${theme.fonts.bold};
      color: ${theme.colors.components.button.normal};
    `}

  ${({ theme, type }) =>
    type === "register" &&
    css`
      font-size: 20px;
      font-family: ${theme.fonts.regular};
      color: ${theme.colors.components.button.jump};
    `}

  ${({ theme, type }) =>
    type === "jump" &&
    css`
      font-size: 16px;
      font-family: ${theme.fonts.regular};
      color: ${theme.colors.components.button.jump};
    `}
`;

export const GreenColor = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.components.button.register};
  `}
`;
