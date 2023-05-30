import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { SCREEN_WIDTH } from '@utils/constants';

export const Container = styled(RectButton)`
  width: ${(SCREEN_WIDTH - 48) / 2.25}px;

  background-color: ${({ theme }) => theme.colors.primary90};
  border-radius: 8px;
`;

export const Image = styled.Image`
  width: ${(SCREEN_WIDTH - 48) / 2.25}px;
  height: ${(SCREEN_WIDTH - 48) / 3.5}px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Wrapper = styled.View`
  flex-grow: 1;
  justify-content: space-between;

  padding: 16px;
`;

export const Title = styled.Text`
  margin-bottom: 12px;

  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.text900};
  `}
`;

export const DateContainer = styled.View``;

export const DateWrapper = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 8px;
`;

export const EventAt = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text600};
  `}
`;
