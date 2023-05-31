import styled, { css } from 'styled-components/native';

import { SCREEN_WIDTH } from '@utils/constants';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.ScrollView`
  flex: 1;

  padding: 0 24px 24px 24px;
`;

export const Title = styled.Text`
  margin: 52px 0 0 24px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.text900};
  `}
`;

export const ImageWrapper = styled.View`
  margin-top: 20px;

  background-color: ${({ theme }) => theme.colors.primary90};
  border-radius: 8px;

  overflow: hidden;
`;

export const Image = styled.Image`
  width: ${SCREEN_WIDTH - 48}px;
  height: 272px;
`;

export const DotWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 16px;
`;

export const ButtonWrapper = styled.View`
  padding: 24px;
`;

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

export const Description = styled.Text`
  margin-top: 24px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text600};
  `}
`;
