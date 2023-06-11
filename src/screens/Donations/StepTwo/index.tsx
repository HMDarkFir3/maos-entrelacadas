import { FC } from 'react';
import { useRoute } from '@react-navigation/native';

import { useSettings } from '@hooks/useSettings';

import { Header } from '@components-of-screens/Donations/components/Header';
import { Step } from '@components-of-screens/Donations/components/Step';

import {
  Container,
  Wrapper,
  StepByStepWrapper,
  StepByStepSeparator,
  Scroller,
  Title,
  Description,
} from '../styles';

import { ToBeDonation, ToBeDonationText } from './styles';

interface Params {
  amount: string;
}

export const StepTwo: FC = () => {
  const { fontSizeValue } = useSettings();
  const { params } = useRoute();
  const { amount } = params as Params;

  const formattedAmount = Number(amount).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <Container>
      <Header />
      <StepByStepWrapper>
        <Step step="1" title="Doação" isActive isFinished />

        <StepByStepSeparator />

        <Step step="2" title="Pagamento" isActive />

        <StepByStepSeparator />

        <Step step="3" title="Confirmação" isActive={false} />
      </StepByStepWrapper>

      <Scroller>
        <Wrapper>
          <Title style={{ fontSize: fontSizeValue(20) }}>
            Faça um PIX para completar a doação!
          </Title>
          <Description style={{ fontSize: fontSizeValue(16) }}>
            Após a doação, um comprovante será enviado ao e-mail, comprovando a confirmação a
            doação.
          </Description>

          <ToBeDonation>
            <ToBeDonationText>Valor total a ser doado:</ToBeDonationText>
            <ToBeDonationText>{formattedAmount}</ToBeDonationText>
          </ToBeDonation>
        </Wrapper>
      </Scroller>
    </Container>
  );
};
