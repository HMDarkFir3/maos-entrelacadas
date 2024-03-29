import styled from 'styled-components/native';

import { STATUS_BAR_HEIGHT } from '@utils/constants';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  align-items: flex-start;

  margin-top: ${STATUS_BAR_HEIGHT + 24}px;
  padding: 0 24px;
`;

export const Wrapper = styled.View`
  margin-top: 24px;
`;
