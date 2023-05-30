import { FC } from 'react';
import { FlatList } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { getEvents } from '@services/GET/getEvents';

import { useSettings } from '@hooks/useSettings';

import { Header } from '@components-of-screens/Events/components/Header';
import { EventCard } from '@components-of-screens/Events/components/EventCard';
import { Loading } from '@components/Loading';

import { Container, Title } from './styles';

export const Events: FC = () => {
  const { fontSizeValue } = useSettings();
  const { data, isLoading } = useQuery({ queryKey: ['events'], queryFn: getEvents });

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
          renderItem={({ item }) => <EventCard data={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};
