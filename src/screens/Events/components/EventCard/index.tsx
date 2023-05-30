import { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Check, CalendarCheck, Clock } from 'phosphor-react-native';

import { EventsDTO } from '@dtos/EventsDTO';

import { useSettings } from '@hooks/useSettings';

import { Container, CheckWrapper, Image, Title, Footer, DateWrapper, EventAt } from './styles';

interface Props extends RectButtonProps {
  data: EventsDTO.Response;
  onPress?: () => void;
}

export const EventCard: FC<Props> = (props) => {
  const { ...rest } = props;
  const { title, eventAt, startTime, endTime, isSignedUp } = props.data;

  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  const formattedEventAt = format(new Date(eventAt), "dd 'de' MMMM", { locale: ptBR });

  const formatTime = (time: string) => format(new Date(time), 'HH:mm', { locale: ptBR });

  return (
    <Container {...rest}>
      {isSignedUp && (
        <CheckWrapper>
          <Check size={fontSizeValue(16)} color={colors.icon40} weight="bold" />
        </CheckWrapper>
      )}

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
