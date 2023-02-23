import { FC } from "react";

import { Header } from "@components-of-screens/Authentication/components/Header";

import { Container } from "../styles";

export const Login: FC = () => {
  return (
    <Container>
      <Header
        title="Faça login"
        description="Queremos impactar de forma positiva a sua vida e de sua comunidade."
      />
    </Container>
  );
};
