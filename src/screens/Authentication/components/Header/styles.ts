import styled, { css } from "styled-components/native";
import { Image } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { SCREEN_WIDTH } from "@utils/globalVariables";

export const Container = styled.View``;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${getStatusBarHeight() + 40}px;
`;

export const Logo = styled(Image)`
  position: absolute;
  left: ${SCREEN_WIDTH / 2 - 48}px;

  width: 48px;
  height: 48px;
`;

export const Title = styled.Text`
  margin-top: 52px;

  text-align: center;
  font-size: 48px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.screens.authentication.components.header.textPrimary};
  `}
`;

export const Description = styled.Text`
  margin-top: 12px;

  text-align: center;
  font-size: 20px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.screens.authentication.components.header
      .textSecondary};
  `}
`;
