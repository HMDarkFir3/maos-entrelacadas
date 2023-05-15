import { FC } from 'react';
import { useTheme } from 'styled-components/native';
import { CalendarCheck, Clock } from 'phosphor-react-native';

import { Container, Image, Title, Footer, DateWrapper, Date } from './styles';

export const EventCard: FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <Image source={{ uri: 'https://www.github.com/hmdarkfir3.png' }} />

      <Title>Sorvetada</Title>

      <Footer>
        <DateWrapper>
          <CalendarCheck size={16} color={colors.icon600} weight="bold" />
          <Date>21 de novembro</Date>
        </DateWrapper>

        <DateWrapper style={{ marginTop: 4 }}>
          <Clock size={16} color={colors.icon600} weight="bold" />
          <Date>09:00 até 13:00</Date>
        </DateWrapper>
      </Footer>
    </Container>
  );
};
