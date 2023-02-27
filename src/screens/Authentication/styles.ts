import styled, { css } from "styled-components/native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";

import { SCREEN_WIDTH } from "@utils/globalVariables";

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const InputBlurButton = styled(TouchableWithoutFeedback)``;

export const InputWrapper = styled.View`
  margin-top: 92px;
`;

export const ForgetPasswordButton = styled(TouchableOpacity)``;

export const ForgetPasswordButtonText = styled.Text`
  text-align: right;
  font-size: 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.screens.authentication.textPrimary};
  `}
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  position: absolute;
  bottom: 32px;

  width: ${SCREEN_WIDTH}px;
`;
