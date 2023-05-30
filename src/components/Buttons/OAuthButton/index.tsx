import { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { Container, Wrapper } from './styles';

interface Props extends RectButtonProps {
  icon: FC<SvgProps>;
}

export const OAuthButton: FC<Props> = (props) => {
  const { icon: Icon, ...rest } = props;

  return (
    <Container>
      <Wrapper {...rest}>
        <Icon />
      </Wrapper>
    </Container>
  );
};
