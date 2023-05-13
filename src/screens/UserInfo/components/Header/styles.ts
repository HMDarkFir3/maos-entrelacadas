import styled from 'styled-components/native';

import { STATUS_BAR_HEIGHT } from '@utils/constants';

export const Container = styled.View`
  flex-direction: row;

  margin-top: ${STATUS_BAR_HEIGHT + 24}px;
  padding: 12px 24px;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 152px;
  height: 152px;

  border-radius: 88px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.screens.userInfo.components.header.primary};
`;
