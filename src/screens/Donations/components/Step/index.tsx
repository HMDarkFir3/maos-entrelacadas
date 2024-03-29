import { FC } from 'react';

import { useSettings } from '@hooks/useSettings';

import { Container, Circle, CircleText, Title } from './styles';

interface Props {
  step: string;
  title: string;
  isActive: boolean;
  isFinished?: boolean;
}

export const Step: FC<Props> = (props) => {
  const { step, title, isActive, isFinished = false } = props;

  const { fontSizeValue } = useSettings();

  return (
    <Container>
      <Circle isActive={isActive} isFinished={isFinished}>
        <CircleText style={{ fontSize: fontSizeValue(12) }}>{step}</CircleText>
      </Circle>

      <Title style={{ fontSize: fontSizeValue(12) }} isActive={isActive}>
        {title}
      </Title>
    </Container>
  );
};
