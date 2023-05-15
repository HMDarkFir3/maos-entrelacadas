import styled, { css } from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { STATUS_BAR_HEIGHT } from '@utils/constants';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${STATUS_BAR_HEIGHT + 24}px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 12px;
`;

export const ProfileButton = styled(BorderlessButton)``;

export const UserImage = styled.Image`
  width: 48px;
  height: 48px;

  border-radius: 24px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary600};
`;

export const UserInfo = styled.View``;

export const Greeting = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text900};
  `}
`;

export const Username = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.text900};
  `}
`;
