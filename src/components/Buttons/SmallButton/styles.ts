import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  width: 78px;
  height: 48px;

  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;

  ${({ theme }) =>
    css`
      background-color: ${theme.colors.components.smallButton.background};
    `}

  overflow: hidden;
`;

export const Wrapper = styled(RectButton)`
  align-items: center;
  justify-content: center;

  width: 78px;
  height: 48px;
`;

export const Load = styled.ActivityIndicator``;
