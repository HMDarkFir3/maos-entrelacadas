import { useState, useCallback, FC } from 'react';
import { Switch } from 'react-native';
import { useTheme } from 'styled-components/native';

import { useSettings } from '@hooks/useSettings';

import { Header } from '@components-of-screens/Donations/components/Header';
import { StepByStep } from '@components-of-screens/Donations/components/StepByStep';
import { AmountCard } from '@components-of-screens/Donations/components/AmountCard';
import { InputAmount } from '@components-of-screens/Donations/components/InputAmount';
import { Button } from '@components/Buttons/Button';

import { donations } from '@utils/donations';

import {
  Container,
  Scroller,
  Wrapper,
  Title,
  Description,
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

export const Donations: FC = () => {
  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  const [selectedAmount, setSelectedAmount] = useState<SelectedAmount>({} as SelectedAmount);
  const [isActiveInputAmount, setIsActiveInputAmount] = useState<boolean>(false);
  const [switchValue] = useState(false);

  const onSelectAmount = useCallback(
    (selected: SelectedAmount) => {
      setIsActiveInputAmount(false);

      if (selectedAmount.id === selected.id) {
        setSelectedAmount({} as SelectedAmount);
        return;
      }

      setSelectedAmount({ id: selected.id, amount: selected.amount });
    },
    [selectedAmount]
  );

  const onInputAmount = useCallback(() => {
    setSelectedAmount({} as SelectedAmount);
    setIsActiveInputAmount((prevState) => !prevState);
  }, []);

  return (
    <Container>
      <Header />
      <StepByStep />

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

          <InputAmount isActive={isActiveInputAmount} onPress={onInputAmount} />
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
          <Button title="Confirmar a doação" />
        </ButtonWrapper>
      </Scroller>
    </Container>
  );
};
