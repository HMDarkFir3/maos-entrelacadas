import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { BorderlessButton } from 'react-native-gesture-handler';

import { STATUS_BAR_HEIGHT } from '@utils/constants';

export const Container = styled.View`
  flex-direction: row;

  margin-top: ${STATUS_BAR_HEIGHT + 24}px;
  padding: 12px 24px;
`;

export const UserImageWrapper = styled.View`
  border-radius: 88px;
  z-index: 0;
`;

export const UserImageButton = styled.TouchableWithoutFeedback``;

export const UserImage = styled(Animated.Image)`
  width: 152px;
  height: 152px;

  border-radius: 88px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary600};

  z-index: 1;
`;

export const UserImageEdit = styled.View`
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 8px;
  right: 8px;

  width: 32px;
  height: 32px;

  background-color: ${({ theme }) => theme.colors.primary600};
  border-radius: 20px;

  z-index: 2;
`;

export const EditButton = styled(BorderlessButton)``;

export const Box = styled.View`
  flex: 1;
`;
