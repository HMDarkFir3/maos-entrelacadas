import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  type: 'primary' | 'secondary';
}

interface TitleProps {
  type: 'primary' | 'secondary';
}

export const Container = styled(RectButton)<ContainerProps>`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 56px;

  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.colors.primary600 : theme.colors.primary300};
  border-radius: 8px;
`;

export const Title = styled.Text<TitleProps>`
  ${({ theme, type }) =>
    css`
      font-family: ${theme.fonts.bold};
      color: ${type === 'primary' ? theme.colors.text100 : theme.colors.primary600};
    `}
`;

export const Load = styled.ActivityIndicator``;
