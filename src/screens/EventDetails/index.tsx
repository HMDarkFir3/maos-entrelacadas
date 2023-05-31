import { useRef, FC } from 'react';
import { FlatList, Animated } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useTheme } from 'styled-components/native';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CalendarCheck, Clock } from 'phosphor-react-native';

import { queryClient } from '@services/queryClient';
import { getEventDetails } from '@services/GET/getEventDetails';
import { createUserEvent } from '@services/POST/createUserEvent';

import { useAppSelector } from '@hooks/useAppSelector';
import { useSettings } from '@hooks/useSettings';

import { Header } from '@components-of-screens/EventDetails/components/Header';
import { Button } from '@components/Buttons/Button';
import { ImageDot } from '@components/ImageDot';
import { Loading } from '@components/Loading';

import {
  Container,
  Wrapper,
  Title,
  ImageWrapper,
  Image,
  DotWrapper,
  DateWrapper,
  EventAt,
  ButtonWrapper,
  Description,
} from './styles';

interface Params {
  id: string;
}

export const EventDetails: FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { fontSizeValue } = useSettings();
  const { params } = useRoute();
  const { id } = params as Params;
  const { data, isLoading } = useQuery({
    queryKey: ['event', user?.id, id],
    queryFn: () => getEventDetails(user?.id!, id),
  });
  const mutation = useMutation({
    mutationKey: ['createUserEvent', user?.id, id],
    mutationFn: () => createUserEvent(user?.id!, id),
    onSuccess: () => queryClient.invalidateQueries(['events']),
  });
  const { colors } = useTheme();

  const imageSliderRef = useRef<FlatList>(null);
  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;

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
            <ImageWrapper>
              <Animated.FlatList
                ref={imageSliderRef}
                data={[0, 1, 2, 3, 4]}
                keyExtractor={(item) => String(item)}
                renderItem={() => <Image source={{ uri: 'https://github.com/hmdarkfir3.png' }} />}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                  [
                    {
                      nativeEvent: { contentOffset: { x: scrollX } },
                    },
                  ],
                  { useNativeDriver: true }
                )}
              />

              <DotWrapper>
                <ImageDot data={[0, 1, 2, 3, 4]} scrollX={scrollX} />
              </DotWrapper>
            </ImageWrapper>

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
              type={mutation.isSuccess || data?.isSignedUp ? 'secondary' : 'primary'}
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
