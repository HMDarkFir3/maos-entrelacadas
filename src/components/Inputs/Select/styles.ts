import styled, { css } from "styled-components/native";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

interface ItemTextProps {
  isEditable: boolean;
}

interface SelectedTextProps {
  isSelected: boolean;
}

export const Container = styled(View)`
  z-index: 2;
`;

export const Wrapper = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  padding: 0 12px 8px 0;

  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.components.select.primary};
`;

export const Placeholder = styled.Text`
  flex: 1;

  margin-left: 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.components.select.placeholder};
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
  border-color: ${({ theme }) => theme.colors.components.select.primary};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const Item = styled(RectButton)``;

export const ItemText = styled.Text<ItemTextProps>`
  flex: 1;

  ${({ theme, isEditable }) => css`
    color: ${isEditable
      ? theme.colors.components.select.text
      : theme.colors.components.select.placeholder};
  `}
`;

export const ItemSeparator = styled.View`
  height: 1.5px;

  margin: 12px 0;

  background-color: ${({ theme }) => theme.colors.components.select.primary};

  opacity: 0.3;
`;

export const SelectedText = styled.Text<SelectedTextProps>`
  ${({ theme, isSelected }) => css`
    color: ${isSelected
      ? theme.colors.components.select.primary
      : theme.colors.components.select.placeholder};
  `}
`;
