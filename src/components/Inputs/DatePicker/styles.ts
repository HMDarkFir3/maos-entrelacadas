import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;

  padding-bottom: 8px;

  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.components.datePicker.primary};

  z-index: 1;
`;

export const Date = styled.Text`
  flex: 1;

  margin-left: 16px;

  font-size: 20px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.components.select.text};
  `}
`;

export const Placeholder = styled.Text`
  flex: 1;

  margin-left: 16px;

  font-size: 20px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.components.select.placeholder};
  `}
`;