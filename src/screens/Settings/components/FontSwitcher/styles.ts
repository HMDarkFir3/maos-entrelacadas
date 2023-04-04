import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ItemTextProps {
  selected: boolean;
}

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 56px;

  padding: 0 24px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  margin-left: 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.screens.settings.components.fontSwitcher.textPrimary};
  `}
`;

export const SelectedFont = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.screens.settings.components.fontSwitcher.textSecondary};
  `}
`;

export const List = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Item = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  height: 48px;

  padding: 0 24px;
`;

export const ItemText = styled.Text<ItemTextProps>`
  flex: 1;

  ${({ theme, selected }) => css`
    font-family: ${theme.fonts.medium};
    color: ${selected
      ? theme.colors.screens.settings.components.fontSwitcher.textSecondary
      : theme.colors.screens.settings.components.fontSwitcher.textPrimary};
  `}
`;
