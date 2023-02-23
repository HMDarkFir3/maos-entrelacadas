import { FC } from "react";
import { useTheme } from "styled-components/native";
import { EnvelopeSimple, LockOpen } from "phosphor-react-native";

import { Header } from "@components-of-screens/Authentication/components/Header";
import { Input } from "@components/Input";

import { Container, InputWrapper } from "../styles";

export const Login: FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <Header
        title="Faça login"
        description="Queremos impactar de forma positiva a sua vida e de sua comunidade."
      />

      <InputWrapper>
        <Input
          style={{ marginBottom: 32 }}
          icon={() => (
            <EnvelopeSimple
              size={24}
              color={colors.components.input.placeholder}
            />
          )}
          placeholder="Email"
        />

        <Input
          icon={() => (
            <LockOpen size={24} color={colors.components.input.placeholder} />
          )}
          isPassword
          placeholder="Senha"
        />
      </InputWrapper>
    </Container>
  );
};
