import { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import { Container, Wrapper, Load } from './styles';

interface Props extends RectButtonProps {
  icon: any;
  isLoading?: boolean;
}

export const SmallButton: FC<Props> = (props) => {
  const { icon: Icon, isLoading, ...rest } = props;

  const { colors } = useTheme();

  return (
    <Container>
      <Wrapper {...rest}>
        {isLoading ? <Load size="small" color={colors.icon40} /> : <Icon />}
      </Wrapper>
    </Container>
  );
};
