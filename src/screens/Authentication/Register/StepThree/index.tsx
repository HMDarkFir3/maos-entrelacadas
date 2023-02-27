import { FC } from "react";

import { Header } from "@components-of-screens/Authentication/components/Header";

import { InputBlurButton, Container } from "../../styles";

export const StepThree: FC = () => {
  return (
    <InputBlurButton>
      <Container>
        <Header
          title="Crie sua conta!"
          description="Preencha com sua senha, depois a confirme."
        />
      </Container>
    </InputBlurButton>
  );
};
