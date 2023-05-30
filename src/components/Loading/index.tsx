import { FC } from 'react';
import { useTheme } from 'styled-components/native';

import { Container, Load } from './styles';

export const Loading: FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <Load color={colors.primary600} size="large" />
    </Container>
  );
};
