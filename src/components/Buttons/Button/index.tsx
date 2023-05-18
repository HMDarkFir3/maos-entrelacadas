import { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { useSettings } from '@hooks/useSettings';

import { Container, Title, Load } from './styles';

interface Props extends RectButtonProps {
  title: string;
  isLoading?: boolean;
}

export const Button: FC<Props> = (props) => {
  const { title, isLoading, ...rest } = props;

  const { fontSizeValue } = useSettings();

  return (
    <Container {...rest}>
      {isLoading ? (
        <Load color="#fff" />
      ) : (
        <Title style={{ fontSize: fontSizeValue(16) }}>{title}</Title>
      )}
    </Container>
  );
};
