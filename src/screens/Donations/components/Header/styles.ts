import styled, { css } from 'styled-components/native';

import { STATUS_BAR_HEIGHT } from '@utils/constants';

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  padding: 0 24px;
  margin-top: ${STATUS_BAR_HEIGHT + 40}px;
`;

export const Wrapper = styled.View`
  position: absolute;
  left: 24px;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.primary600};
  `}
`;
