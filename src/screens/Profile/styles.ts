import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.View``;

export const EventHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 28px;
  padding: 0 24px;
`;

export const EventTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.screens.profile.text};
  `}
`;

export const Footer = styled.View``;
