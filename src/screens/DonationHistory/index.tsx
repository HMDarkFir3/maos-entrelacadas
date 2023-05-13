import { FC } from 'react';
import { FlatList } from 'react-native';

import { BackButton } from '@components/Buttons/BackButton';

import { DonationHistoryCard } from './components/DonationHistoryCard';

import { Container, Wrapper, Header, Title } from './styles';

export const DonationHistory: FC = () => (
  <Container>
    <Wrapper>
      <Header>
        <BackButton />
      </Header>

      <Title>Histórico de Doações</Title>
    </Wrapper>

    <FlatList
      contentContainerStyle={{ paddingHorizontal: 24 }}
      data={[0, 1, 2, 4, 5, 6, 7, 8]}
      keyExtractor={(item) => String(item)}
      renderItem={() => <DonationHistoryCard />}
      showsVerticalScrollIndicator={false}
    />
  </Container>
);
