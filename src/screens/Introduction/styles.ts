import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  bottom: 32px;

  width: 100%;
`;

export const JumpButton = styled.TouchableOpacity`
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: 16px;

  ${({ theme }) =>
    css`
      font-family: ${theme.fonts.regular};
      color: ${theme.colors.screens.introduction.title};
    `}
`;
