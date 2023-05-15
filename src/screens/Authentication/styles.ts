import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { SCREEN_WIDTH } from '@utils/constants';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.View`
  padding: 0 24px;
`;

export const InputWrapper = styled.View`
  margin-top: 24px;
`;

export const ForgetPasswordContainer = styled.View`
  align-items: flex-end;
`;

export const ForgetPasswordButton = styled(RectButton)`
  border-radius: 4px;
`;

export const ForgetPasswordButtonText = styled.Text`
  text-align: right;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.primary600};
  `}
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  width: ${SCREEN_WIDTH}px;

  margin: 20px 0;
`;
