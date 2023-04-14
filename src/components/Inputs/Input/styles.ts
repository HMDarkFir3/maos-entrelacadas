import styled, { css } from 'styled-components/native';
import { View, TextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

interface WrapperProps {
  error: boolean;
}

interface StyledInputProps {
  isEditable: boolean;
}

export const Container = styled(View)`
  z-index: 1;
`;

export const Wrapper = styled.View<WrapperProps>`
  flex-direction: row;
  align-items: center;

  padding-bottom: 8px;

  border-bottom-width: 1px;

  ${({ error, theme }) =>
    error
      ? css`
          border-color: ${theme.colors.components.input.error};
        `
      : css`
          border-color: ${theme.colors.components.input.primary};
        `}
`;

export const StyledInput = styled(TextInput)<StyledInputProps>`
  flex: 1;

  padding: 0 16px;

  ${({ theme, isEditable }) => css`
    font-family: ${theme.fonts.regular};
    color: ${isEditable
      ? theme.colors.components.input.text
      : theme.colors.components.input.placeholder};
  `}
`;

export const ErrorText = styled.Text`
  margin-top: 6px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.components.input.error};
  `}
`;

export const MaxLength = styled.Text`
  margin-top: 6px;

  text-align: right;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.components.input.placeholder};
  `}
`;

export const TogglePasswordVisibilityButton = styled(BorderlessButton)``;
