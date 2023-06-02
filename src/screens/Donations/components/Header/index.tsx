import { FC } from 'react';

import { useSettings } from '@hooks/useSettings';

import { BackButton } from '@components/Buttons/BackButton';

import { Container, Wrapper, Title } from './styles';

interface Props {
  testID?: string;
  onBackButton?: () => void;
}

export const Header: FC<Props> = (props) => {
  const { testID, onBackButton } = props;

  const { fontSizeValue } = useSettings();

  return (
    <Container>
      <Wrapper>
        <BackButton testID={testID} onBackButton={onBackButton} />
      </Wrapper>
      <Title style={{ fontSize: fontSizeValue(20) }}>Realizar Doação</Title>
    </Container>
  );
};
