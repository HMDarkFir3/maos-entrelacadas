import styled from 'styled-components/native';

import { STATUS_BAR_HEIGHT } from '@utils/globalVariables';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: ${STATUS_BAR_HEIGHT + 24}px;
  padding: 12px 24px;
`;

export const UserImage = styled.Image`
  width: 176px;
  height: 176px;

  border-radius: 88px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.screens.userInfo.components.header.primary};
`;
