import { FC } from "react";

import { BackButton } from "@components/Buttons/BackButton";

import { Container, Header } from "./styles";

export const Settings: FC = () => {
  return (
    <Container>
      <Header>
        <BackButton />
      </Header>
    </Container>
  );
};
