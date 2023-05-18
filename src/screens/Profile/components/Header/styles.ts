import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from '@utils/constants';

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${STATUS_BAR_HEIGHT + 12}px;
  padding: 12px 24px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 12px;
`;

export const UserImage = styled.Image`
  width: 48px;
  height: 48px;

  border-radius: 24px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary600};
`;

export const UserInfo = styled.View``;

export const Username = styled.Text`
  width: ${SCREEN_WIDTH - 168}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.primary600};
  `}
`;

export const Role = styled.Text`
  text-transform: capitalize;
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.text200};
  `}
`;
