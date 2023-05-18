import styled, { css } from 'styled-components/native';

import { SCREEN_WIDTH } from '@utils/constants';

const CARD_WIDTH = SCREEN_WIDTH / 2 - 36;

export const Container = styled.View`
  justify-content: space-between;

  width: ${CARD_WIDTH}px;

  padding: 20px;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.primary90};
`;

export const Image = styled.Image`
  align-self: center;

  width: 72px;
  height: 72px;

  border-radius: 36px;

  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary600};
`;

export const Title = styled.Text`
  text-align: center;
  margin: 16px 0;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.text900};
  `}
`;

export const Footer = styled.View``;

export const DateWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Date = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text600};
  `}
`;
