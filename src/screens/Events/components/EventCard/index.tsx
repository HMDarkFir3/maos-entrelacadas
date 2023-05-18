import { FC } from 'react';
import { useTheme } from 'styled-components/native';
import { CalendarCheck, Clock } from 'phosphor-react-native';

import { useSettings } from '@hooks/useSettings';

import { Container, Image, Title, Footer, DateWrapper, Date } from './styles';

export const EventCard: FC = () => {
  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  return (
    <Container>
      <Image source={{ uri: 'https://www.github.com/hmdarkfir3.png' }} />

      <Title style={{ fontSize: fontSizeValue(16) }}>Sorvetada</Title>

      <Footer>
        <DateWrapper>
          <CalendarCheck size={fontSizeValue(16)} color={colors.icon600} weight="bold" />
          <Date style={{ fontSize: fontSizeValue(14) }}>21 de novembro</Date>
        </DateWrapper>

        <DateWrapper style={{ marginTop: 8 }}>
          <Clock size={fontSizeValue(16)} color={colors.icon600} weight="bold" />
          <Date style={{ fontSize: fontSizeValue(14) }}>09:00 até 13:00</Date>
        </DateWrapper>
      </Footer>
    </Container>
  );
};
