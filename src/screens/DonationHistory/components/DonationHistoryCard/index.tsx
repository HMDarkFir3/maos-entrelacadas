import { FC } from 'react';
import { useTheme } from 'styled-components/native';
import { CurrencyDollar, CalendarCheck } from 'phosphor-react-native';

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
  const { colors } = useTheme();

  return (
    <Container>
      <IconWrapper>
        <CurrencyDollar
          size={48}
          color={colors.screens.donationHistory.components.donationHistoryCard.icon}
          weight="bold"
        />
      </IconWrapper>
      <Wrapper>
        <DateWrapper>
          <CalendarCheck
            size={16}
            color={colors.screens.donationHistory.components.donationHistoryCard.icon}
            weight="bold"
          />
          <Date>21 de novembro às 12:03</Date>
        </DateWrapper>
        <Amount>R$320,00</Amount>
        <Proof>
          <ClickHere>Clique aqui</ClickHere> para ver o comprovante
        </Proof>
      </Wrapper>
    </Container>
  );
};
