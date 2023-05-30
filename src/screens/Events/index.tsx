import { FC } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';

import { getEvents } from '@services/GET/getEvents';

import { useAppSelector } from '@hooks/useAppSelector';
import { useSettings } from '@hooks/useSettings';

import { Header } from '@components-of-screens/Events/components/Header';
import { EventCard } from '@components-of-screens/Events/components/EventCard';
import { Loading } from '@components/Loading';

import { Container, Title } from './styles';

export const Events: FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { fontSizeValue } = useSettings();
  const { data, isLoading } = useQuery({
    queryKey: ['events', user?.id],
    queryFn: () => getEvents(user?.id!),
  });
  const { navigate } = useNavigation();

  const onEventCard = (eventId: string) => navigate('EventDetails', { id: eventId });

  return (
    <Container>
      <Header />

      <Title style={{ fontSize: fontSizeValue(20) }}>Lista de Eventos</Title>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={{ gap: 24, paddingBottom: 24 }}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <EventCard data={item} onPress={() => onEventCard(item.id)} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};
