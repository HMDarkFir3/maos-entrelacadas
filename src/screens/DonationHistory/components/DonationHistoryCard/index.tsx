import { FC } from 'react';
import { useTheme } from 'styled-components/native';
import { CurrencyDollar, CalendarCheck } from 'phosphor-react-native';

import { useSettings } from '@hooks/useSettings';

import {
  Container,
  IconWrapper,
  Wrapper,
  Amount,
  DateWrapper,
  Date,
  Proof,
  ClickHere,
} from './styles';

export const DonationHistoryCard: FC = () => {
  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  return (
    <Container>
      <IconWrapper>
        <CurrencyDollar
          size={fontSizeValue(48)}
          color={colors.screens.donationHistory.components.donationHistoryCard.icon}
          weight="bold"
        />
      </IconWrapper>
      <Wrapper>
        <DateWrapper>
          <CalendarCheck
            size={fontSizeValue(16)}
            color={colors.screens.donationHistory.components.donationHistoryCard.icon}
            weight="bold"
          />
          <Date style={{ fontSize: fontSizeValue(16) }}>21 de novembro às 12:03</Date>
        </DateWrapper>
        <Amount style={{ fontSize: fontSizeValue(28) }}>R$320,00</Amount>
        <Proof style={{ fontSize: fontSizeValue(16) }}>
          <ClickHere style={{ fontSize: fontSizeValue(16) }}>Clique aqui</ClickHere> para ver o
          comprovante
        </Proof>
      </Wrapper>
    </Container>
  );
};
