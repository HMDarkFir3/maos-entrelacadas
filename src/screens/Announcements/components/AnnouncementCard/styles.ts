import styled, { css } from 'styled-components/native';

import { SCREEN_WIDTH } from '@utils/constants';

export const Container = styled.View``;

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.primary90};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const CreatedAt = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text600};
  `}
`;

export const Image = styled.Image`
  width: ${SCREEN_WIDTH - 48}px;
  height: ${SCREEN_WIDTH - 48}px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const DescriptionWrapper = styled.View`
  padding: 16px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text900};
  `}
`;

export const Tags = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 8px;

  margin-top: 12px;
`;

export const Tag = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.link};
  `}
`;
