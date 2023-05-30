import { FC } from 'react';
import { useTheme } from 'styled-components/native';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CalendarCheck, Clock } from 'phosphor-react-native';

import { EventsDTO } from '@dtos/EventsDTO';

import { useSettings } from '@hooks/useSettings';

import { Container, Image, Title, Footer, DateWrapper, EventAt } from './styles';

interface Props {
  data: EventsDTO.Response;
}

export const EventCard: FC<Props> = (props) => {
  const { title, eventAt, startTime, endTime } = props.data;

  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  const formattedEventAt = format(new Date(eventAt), "dd 'de' MMMM", { locale: ptBR });

  const formatTime = (time: string) => format(new Date(time), 'HH:mm');

  return (
    <Container>
      <Image source={{ uri: 'https://www.github.com/hmdarkfir3.png' }} />

      <Title style={{ fontSize: fontSizeValue(16) }}>{title}</Title>

      <Footer>
        <DateWrapper>
          <CalendarCheck size={fontSizeValue(16)} color={colors.icon600} weight="bold" />
          <EventAt style={{ fontSize: fontSizeValue(14) }}>{formattedEventAt}</EventAt>
        </DateWrapper>

        <DateWrapper style={{ marginTop: 8 }}>
          <Clock size={fontSizeValue(16)} color={colors.icon600} weight="bold" />
          <EventAt style={{ fontSize: fontSizeValue(14) }}>{`${formatTime(
            startTime
          )} até ${formatTime(endTime)}`}</EventAt>
        </DateWrapper>
      </Footer>
    </Container>
  );
};
