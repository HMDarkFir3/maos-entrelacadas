import styled, { css } from 'styled-components/native';

import { STATUS_BAR_HEIGHT } from '@utils/constants';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.View`
  padding: 0 24px;
`;

export const Header = styled.View`
  align-items: flex-start;

  margin-top: ${STATUS_BAR_HEIGHT + 24}px;
`;

export const Title = styled.Text`
  margin-top: 40px;
  margin-bottom: 36px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.text900};
  `}
`;
