import styled from 'styled-components/native';
import { Image } from 'react-native';

import { SCREEN_WIDTH, STATUS_BAR_HEIGHT } from '@utils/constants';

export const Container = styled.View`
  padding: 0 24px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${STATUS_BAR_HEIGHT + 40}px;
`;

export const Logo = styled(Image)`
  position: absolute;
  left: ${SCREEN_WIDTH / 2 - 48}px;

  width: 48px;
  height: 48px;
`;
