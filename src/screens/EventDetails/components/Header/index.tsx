import { FC } from 'react';

import { BackButton } from '@components/Buttons/BackButton';

import { Container, Wrapper, Logo } from './styles';

interface Props {
  testID?: string;
  onBackButton?: () => void;
}

export const Header: FC<Props> = (props) => {
  const { testID, onBackButton } = props;

  return (
    <Container>
      <Wrapper>
        <BackButton testID={testID} onBackButton={onBackButton} />

        <Logo source={require('@assets/img/logo.png')} />
      </Wrapper>
    </Container>
  );
};
