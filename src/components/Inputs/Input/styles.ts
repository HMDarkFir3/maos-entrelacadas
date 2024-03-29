import styled, { css } from 'styled-components/native';
import { View, TextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

interface WrapperProps {
  error: boolean;
  isEditable: boolean;
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

  ${({ isEditable, theme }) =>
    isEditable
      ? css`
          border-color: ${theme.colors.primary600};
        `
      : css`
          border-color: ${theme.colors.placeholder};
        `}

  ${({ error, theme }) =>
    error &&
    css`
      border-color: ${theme.colors.error};
    `}
`;

export const StyledInput = styled(TextInput)<StyledInputProps>`
  flex: 1;

  padding: 0 16px;

  ${({ theme, isEditable }) => css`
    font-family: ${theme.fonts.regular};
    color: ${isEditable ? theme.colors.text900 : theme.colors.placeholder};
  `}
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ErrorText = styled.Text`
  margin-top: 6px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.error};
  `}
`;

export const MaxLength = styled.Text`
  margin-top: 6px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.placeholder};
  `}
`;

export const EmptyView = styled.View``;

export const TogglePasswordVisibilityButton = styled(BorderlessButton)``;
