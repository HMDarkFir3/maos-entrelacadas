import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const EventHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 28px;
`;

export const EventTitle = styled.Text`
  font-size: 20px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.screens.profile.text};
  `}
`;
