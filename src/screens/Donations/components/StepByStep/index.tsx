import { FC } from 'react';

import { Step } from '@components-of-screens/Donations/components/Step';

import { Container, Separator } from './styles';

export const StepByStep: FC = () => (
  <Container>
    <Step step="1" title="Doação" isActive />

    <Separator />

    <Step step="2" title="Pagamento" isActive={false} />

    <Separator />

    <Step step="3" title="Confirmação" isActive={false} />
  </Container>
);
