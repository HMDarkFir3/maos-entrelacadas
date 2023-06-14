import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

interface WrapperProps {
  error: boolean;
  isEditable: boolean;
}

interface DateProps {
  isEditable: boolean;
}

export const Container = styled(TouchableOpacity)``;

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

export const Date = styled.Text<DateProps>`
  flex: 1;

  margin-left: 16px;

  ${({ theme, isEditable }) => css`
    font-family: ${theme.fonts.regular};
    color: ${isEditable ? theme.colors.text900 : theme.colors.placeholder};
  `}
`;

export const Placeholder = styled.Text`
  flex: 1;

  margin-left: 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.placeholder};
  `}
`;

export const ErrorText = styled.Text`
  margin-top: 6px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.error};
  `}
`;
