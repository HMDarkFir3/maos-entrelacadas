import { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

import { Container, Wrapper, Loading } from './styles';

interface Props extends RectButtonProps {
  icon: FC<SvgProps>;
  isLoading?: boolean;
}

export const OAuthButton: FC<Props> = (props) => {
  const { icon: Icon, isLoading, ...rest } = props;

  const { colors } = useTheme();

  return (
    <Container>
      <Wrapper {...rest}>
        {isLoading ? <Loading size="small" color={colors.primary600} /> : <Icon />}
      </Wrapper>
    </Container>
  );
};
