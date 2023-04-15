import { FC } from 'react';

import { useAppSelector } from '@hooks/useAppSelector';

import { Header } from '@components-of-screens/Home/components/Header';

import { Container } from './styles';

export const Home: FC = () => {
  const { user } = useAppSelector((state) => state.auth);

  console.log(user?.person.gender);

  return (
    <Container>
      <Header />
    </Container>
  );
};
