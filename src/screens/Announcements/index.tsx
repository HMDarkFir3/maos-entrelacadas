import { FC } from 'react';
import { FlatList } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { getAnnouncements } from '@services/GET/getAnnouncements';

import { useSettings } from '@hooks/useSettings';

import { Header } from '@components-of-screens/Announcements/components/Header';
import { AnnouncementCard } from '@components-of-screens/Announcements/components/AnnouncementCard';
import { Loading } from '@components/Loading';

import { Container, Title } from './styles';

export const Announcements: FC = () => {
  const { fontSizeValue } = useSettings();
  const { data, isLoading } = useQuery({
    queryKey: ['announcements'],
    queryFn: getAnnouncements,
  });

  return (
    <Container>
      <Header />

      <Title style={{ fontSize: fontSizeValue(20) }}>Comunicados</Title>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <AnnouncementCard data={item} />}
          contentContainerStyle={{ gap: 24, paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};
