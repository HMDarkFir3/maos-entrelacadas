import { FC } from "react";

import { Header } from "@components-of-screens/Home/components/Header";

import { Container } from "./styles";

export const Home: FC = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};
