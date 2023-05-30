import styled from 'styled-components/native';
import { View, Animated } from 'react-native';

export const Container = styled(View)`
  flex-direction: row;
`;

export const Dot = styled(Animated.View)`
  height: 12px;
  width: 12px;

  margin: 0 10px;

  background-color: ${({ theme }) => theme.colors.primary600};
  border-radius: 6px;
`;
