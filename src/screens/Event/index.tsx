import { FC } from 'react';
import { useRoute } from '@react-navigation/native';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useTheme } from 'styled-components/native';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CalendarCheck, Clock } from 'phosphor-react-native';

import { getEvent } from '@services/GET/getEvent';
import { createUserEvent } from '@services/POST/createUserEvent';

import { useAppSelector } from '@hooks/useAppSelector';
import { useSettings } from '@hooks/useSettings';

import { Header } from '@components-of-screens/Event/components/Header';
import { Button } from '@components/Buttons/Button';
import { Loading } from '@components/Loading';

import {
  Container,
  Wrapper,
  Title,
  Image,
  DateWrapper,
  EventAt,
  ButtonWrapper,
  Description,
} from './styles';

interface Params {
  id: string;
}

export const Event: FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { fontSizeValue } = useSettings();
  const { params } = useRoute();
  const { id } = params as Params;
  const { data, isLoading } = useQuery({ queryKey: ['event', id], queryFn: () => getEvent(id) });
  const mutation = useMutation({
    mutationKey: ['createUserEvent', user?.id, id],
    mutationFn: () => createUserEvent(user?.id!, id),
  });
  const { colors } = useTheme();

  let formattedEventAt: string = '';

  if (data?.eventAt) {
    formattedEventAt = format(new Date(data?.eventAt), "dd 'de' MMMM", { locale: ptBR });
  }
  const formatTime = (time: string): string => format(new Date(time), 'HH:mm');

  const onSignUpEvent = () => mutation.mutate();

  return (
    <Container>
      <Header />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Title style={{ fontSize: fontSizeValue(20) }}>{data?.title}</Title>

          <Wrapper showsVerticalScrollIndicator={false}>
            <Image source={{ uri: 'https://github.com/hmdarkfir3.png' }} />

            <DateWrapper style={{ marginTop: 20 }}>
              <CalendarCheck size={fontSizeValue(16)} color={colors.icon600} weight="bold" />
              <EventAt style={{ fontSize: fontSizeValue(16) }}>{formattedEventAt}</EventAt>
            </DateWrapper>

            <DateWrapper style={{ marginTop: 8 }}>
              <Clock size={fontSizeValue(16)} color={colors.icon600} weight="bold" />
              <EventAt style={{ fontSize: fontSizeValue(16) }}>{`${formatTime(
                data!.startTime
              )} até ${formatTime(data!.endTime)}`}</EventAt>
            </DateWrapper>

            <Description style={{ fontSize: fontSizeValue(16) }}>{data?.description}</Description>
          </Wrapper>

          <ButtonWrapper>
            <Button
              title="Confirmar presença"
              isLoading={mutation.isLoading}
              onPress={onSignUpEvent}
            />
          </ButtonWrapper>
        </>
      )}
    </Container>
  );
};
