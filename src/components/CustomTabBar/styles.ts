import styled, { css } from "styled-components/native";
import { Pressable } from "react-native";

interface TabItemTextProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex-direction: row;

  height: 64px;

  background-color: ${({ theme }) =>
    theme.colors.components.customTabBar.background};

  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.components.customTabBar.border};
`;

export const TabItem = styled(Pressable).attrs(({ theme }) => ({
  android_ripple: {
    color: theme.colors.androidRipple.backgroundPrimary,
  },
}))`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TabItemText = styled.Text<TabItemTextProps>`
  ${({ theme, isActive }) => css`
    font-family: ${theme.fonts.bold};
    color: ${isActive
      ? theme.colors.components.customTabBar.active
      : theme.colors.components.customTabBar.inactive};
  `}
`;
