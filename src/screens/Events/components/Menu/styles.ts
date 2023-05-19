import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { SCREEN_WIDTH } from '@utils/constants';

const MENU_WIDTH = SCREEN_WIDTH / 2 - 36;

export const Container = styled.View`
  position: absolute;
  right: 0;
  top: 40px;

  width: ${MENU_WIDTH}px;

  padding: 8px 0;

  border-radius: 8px;
  border-width: 1px;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary30};
    border-color: ${theme.colors.text200};
  `}
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  gap: 8px;

  width: 100%;

  padding: 8px 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.text900};
  `}
`;

export const Line = styled.View`
  align-self: center;

  width: ${MENU_WIDTH - 32}px;
  height: 1px;

  ${({ theme }) => css`
    background-color: ${theme.colors.text200};
  `}
`;
