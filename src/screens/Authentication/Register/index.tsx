import { FC } from "react";

import { Header } from "@components-of-screens/Authentication/components/Header";

import { Container } from "../styles";

export const Register: FC = () => {
  return (
    <Container>
      <Header
        title="Crie sua conta!"
        description="Vamos começar preenchendo seus dados, começando com seu nome."
      />
    </Container>
  );
};
