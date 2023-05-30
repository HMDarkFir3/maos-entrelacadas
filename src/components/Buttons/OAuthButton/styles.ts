import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;

  border-radius: 8px;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary90};
    border: 1px solid ${theme.colors.primary600};
  `}
`;

export const Wrapper = styled(RectButton)`
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;

  border-radius: 8px;
`;
