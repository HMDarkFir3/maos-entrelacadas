import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

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

export const JumpButton = styled.View`
  align-items: center;
  justify-content: center;

  width: 78px;
  height: 48px;

  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;

  overflow: hidden;
`;

export const JumpButtonWrapper = styled(RectButton)`
  align-items: center;
  justify-content: center;

  width: 78px;
  height: 48px;
`;

export const Title = styled.Text`
  ${({ theme }) =>
    css`
      font-family: ${theme.fonts.regular};
      color: ${theme.colors.screens.introduction.text};
    `}
`;
