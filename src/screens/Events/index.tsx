import { FC } from 'react';
import { FlatList } from 'react-native';

import { useSettings } from '@hooks/useSettings';

import { Header } from '@components-of-screens/Events/components/Header';
import { EventCard } from '@components-of-screens/Events/components/EventCard';

import { Container, Title } from './styles';

export const Events: FC = () => {
  const { fontSizeValue } = useSettings();

  return (
    <Container>
      <Header />

      <Title style={{ fontSize: fontSizeValue(20) }}>Lista de Eventos</Title>

      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ gap: 24, paddingBottom: 24 }}
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <EventCard />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
