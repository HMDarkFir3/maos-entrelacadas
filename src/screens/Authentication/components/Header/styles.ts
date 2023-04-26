import styled, { css } from 'styled-components/native';
import { Image } from 'react-native';
import Animated from 'react-native-reanimated';

import { SCREEN_WIDTH, SCREEN_HEIGHT, STATUS_BAR_HEIGHT } from '@utils/constants';

export const Container = styled(Animated.View)`
  height: ${SCREEN_HEIGHT / 3}px;

  margin-bottom: 92px;
  padding: 0 24px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 48px;

  margin-top: ${STATUS_BAR_HEIGHT + 40}px;
`;

export const Logo = styled(Image)`
  position: absolute;
  left: ${SCREEN_WIDTH / 2 - 48}px;

  width: 48px;
  height: 48px;
`;

export const Title = styled(Animated.Text)`
  margin-top: 52px;

  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.screens.authentication.components.header.textPrimary};
  `}
`;

export const Description = styled(Animated.Text)`
  margin-top: 12px;

  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.screens.authentication.components.header.textSecondary};
  `}
`;
