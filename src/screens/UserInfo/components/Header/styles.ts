import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { BorderlessButton } from 'react-native-gesture-handler';

import { STATUS_BAR_HEIGHT } from '@utils/constants';

export const Container = styled.View`
  flex-direction: row;

  margin-top: ${STATUS_BAR_HEIGHT + 24}px;
  padding: 12px 24px;
`;

export const UserImage = styled(Animated.Image)`
  width: 152px;
  height: 152px;

  border-radius: 88px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary600};
`;

export const EditButton = styled(BorderlessButton)``;

export const Box = styled.View`
  flex: 1;
`;
