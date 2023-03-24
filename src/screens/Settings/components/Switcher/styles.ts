import styled, { css } from "styled-components/native";

export const Container = styled.View`
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
    color: ${theme.colors.screens.settings.components.switcher.text};
  `}
`;
