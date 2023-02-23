import styled, { css } from "styled-components/native";
import { TextInput, TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  padding-bottom: 8px;

  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.components.input.primary};
`;

export const StyledInput = styled(TextInput)`
  flex: 1;

  padding: 0 16px;

  font-size: 20px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.components.input.text};
  `}
`;

export const TogglePasswordVisibilityButton = styled(TouchableOpacity)``;
