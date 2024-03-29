import { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import { useSettings } from '@hooks/useSettings';

import { Container, Title, Load } from './styles';

interface Props extends RectButtonProps {
  type?: 'primary' | 'secondary';
  title: string;
  isLoading?: boolean;
}

export const Button: FC<Props> = (props) => {
  const { type = 'primary', title, isLoading, ...rest } = props;

  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  return (
    <Container type={type} {...rest}>
      {isLoading ? (
        <Load color={type === 'primary' ? colors.text100 : colors.primary600} />
      ) : (
        <Title style={{ fontSize: fontSizeValue(16) }} type={type}>
          {title}
        </Title>
      )}
    </Container>
  );
};
