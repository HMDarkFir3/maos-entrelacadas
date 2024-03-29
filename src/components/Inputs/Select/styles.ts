import styled, { css } from 'styled-components/native';
import { View, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

interface WrapperProps {
  error: boolean;
  isEditable: boolean;
}

interface ItemTextProps {
  isEditable: boolean;
}

interface SelectedTextProps {
  isSelected: boolean;
}

export const Container = styled(View)`
  z-index: 2;
`;

export const Wrapper = styled(TouchableOpacity)<WrapperProps>`
  flex-direction: row;
  align-items: center;

  padding: 0 12px 8px 0;

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

export const Placeholder = styled.Text`
  flex: 1;

  margin-left: 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.placeholder};
  `}
`;

export const CaretWrapper = styled(Animated.View)``;

export const List = styled.View`
  position: absolute;

  width: 100%;

  margin-top: 33px;
  padding: 12px 40px;

  background-color: ${({ theme }) => theme.colors.background};

  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary600};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const ErrorText = styled.Text`
  margin-top: 6px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.error};
  `}
`;

export const Item = styled(TouchableOpacity)``;

export const ItemText = styled.Text<ItemTextProps>`
  flex: 1;

  ${({ theme, isEditable }) => css`
    color: ${isEditable ? theme.colors.text900 : theme.colors.placeholder};
  `}
`;

export const ItemSeparator = styled.View`
  height: 1.5px;

  margin: 12px 0;

  background-color: ${({ theme }) => theme.colors.primary600};

  opacity: 0.3;
`;

export const SelectedText = styled.Text<SelectedTextProps>`
  ${({ theme, isSelected }) => css`
    color: ${isSelected ? theme.colors.primary600 : theme.colors.placeholder};
  `}
`;
