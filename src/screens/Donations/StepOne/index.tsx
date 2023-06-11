import { useState, useCallback, FC } from 'react';
import { Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { useSettings } from '@hooks/useSettings';

import { Header } from '@components-of-screens/Donations/components/Header';
import { Step } from '@components-of-screens/Donations/components/Step';
import { AmountCard } from '@components-of-screens/Donations/components/AmountCard';
import { InputAmount } from '@components-of-screens/Donations/components/InputAmount';
import { Button } from '@components/Buttons/Button';

import { donations } from '@utils/donations';

import {
  Container,
  Wrapper,
  StepByStepWrapper,
  StepByStepSeparator,
  Scroller,
  Title,
  Description,
} from '../styles';

import {
  AmountWrapper,
  Separator,
  MessageWrapper,
  MessageHeader,
  Message,
  MessageLenght,
  MessageInput,
  AnonymousWrapper,
  ButtonWrapper,
} from './styles';

interface SelectedAmount {
  id: string;
  amount: string;
}

export const StepOne: FC = () => {
  const { fontSizeValue } = useSettings();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const [selectedAmount, setSelectedAmount] = useState<SelectedAmount>({} as SelectedAmount);
  const [inputAmount, setInputAmount] = useState<string>('');
  const [isActiveInputAmount, setIsActiveInputAmount] = useState<boolean>(false);
  const [switchValue] = useState(false);

  const onSelectAmount = useCallback(
    (selected: SelectedAmount) => {
      setIsActiveInputAmount(false);

      if (selectedAmount.id === selected.id) {
        setSelectedAmount({} as SelectedAmount);
        return;
      }

      setInputAmount('');
      setSelectedAmount({ id: selected.id, amount: selected.amount });
    },
    [selectedAmount.id]
  );

  const onToggleInputAmount = useCallback(() => {
    setSelectedAmount({} as SelectedAmount);
    setIsActiveInputAmount((prevState) => !prevState);
  }, []);

  const onNavigateToStepTwo = () =>
    navigate('Donations_StepTwo', { amount: selectedAmount.amount || inputAmount });

  return (
    <Container>
      <Header />
      <StepByStepWrapper>
        <Step step="1" title="Doação" isActive />

        <StepByStepSeparator />

        <Step step="2" title="Pagamento" isActive={false} />

        <StepByStepSeparator />

        <Step step="3" title="Confirmação" isActive={false} />
      </StepByStepWrapper>

      <Scroller showsVerticalScrollIndicator={false}>
        <Wrapper>
          <Title style={{ fontSize: fontSizeValue(20) }}>Quanto você gostaria de doar?</Title>
          <Description style={{ fontSize: fontSizeValue(16) }}>
            Com a sua contribuição, projetos são mantidos, crianças são cuidadas e vidas são
            mudadas.
          </Description>

          <AmountWrapper>
            {donations.map((donation) => (
              <AmountCard
                key={donation.id}
                amount={donation.amount}
                isActive={donation.id === selectedAmount.id}
                onPress={() => onSelectAmount(donation)}
              />
            ))}
          </AmountWrapper>

          <InputAmount
            value={inputAmount}
            onChangeText={setInputAmount}
            isActive={isActiveInputAmount}
            onPress={onToggleInputAmount}
          />
        </Wrapper>

        <Separator />

        <MessageWrapper>
          <MessageHeader>
            <Message style={{ fontSize: fontSizeValue(16) }}>Mensagem</Message>
            <MessageLenght style={{ fontSize: fontSizeValue(16) }}>200 restantes</MessageLenght>
          </MessageHeader>

          <MessageInput
            placeholder="Escreva sua mensagem aqui"
            placeholderTextColor={colors.placeholder}
            multiline
            maxLength={200}
          />
        </MessageWrapper>

        <Separator />

        <AnonymousWrapper>
          <Message style={{ fontSize: fontSizeValue(16) }}>Enviar doação anônima</Message>
          <Switch
            trackColor={{
              false: colors.switcher.trackInactive,
              true: colors.switcher.trackActive,
            }}
            thumbColor={switchValue ? colors.switcher.thumbActive : colors.switcher.thumbInactive}
          />
        </AnonymousWrapper>

        <Separator />

        <ButtonWrapper>
          <Button title="Confirmar a doação" onPress={onNavigateToStepTwo} />
        </ButtonWrapper>
      </Scroller>
    </Container>
  );
};
