import { FC } from 'react';
import { FlatList } from 'react-native';

import { useSettings } from '@hooks/useSettings';

import { Header } from '@components-of-screens/Announcements/components/Header';
import { AnnouncementCard } from '@components-of-screens/Announcements/components/AnnouncementCard';

import { Container, Title } from './styles';

export const Announcements: FC = () => {
  const { fontSizeValue } = useSettings();

  return (
    <Container>
      <Header />

      <Title style={{ fontSize: fontSizeValue(20) }}>Comunicados</Title>

      <FlatList
        data={[0, 1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <AnnouncementCard />}
        contentContainerStyle={{ gap: 24, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
