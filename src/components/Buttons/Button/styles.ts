import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
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
      font-family: ${theme.fonts.bold};
      color: ${theme.colors.components.button.text};
    `}
`;
