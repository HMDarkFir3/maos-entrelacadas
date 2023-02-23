import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.colors.components.button.background};
  border-radius: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) =>
    css`
      font-size: 16px;
      font-family: ${theme.fonts.bold};
      color: ${theme.colors.components.button.normal};
    `}
`;

export const GreenColor = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.components.button.register};
  `}
`;
