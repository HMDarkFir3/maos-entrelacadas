import { FC } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components-of-screens/Announcement/components/Header';
import { AnnouncementCard } from '@components-of-screens/Announcement/components/AnnouncementCard';

import { Container, Title } from './styles';

export const Announcement: FC = () => (
  <Container>
    <Header />

    <Title>Comunicados</Title>

    <FlatList
      data={[0, 1, 2, 3]}
      keyExtractor={(item) => String(item)}
      renderItem={() => <AnnouncementCard />}
      contentContainerStyle={{ gap: 24, paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
    />
  </Container>
);
