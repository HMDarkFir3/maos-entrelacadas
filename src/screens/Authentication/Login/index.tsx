import { FC } from "react";
import { KeyboardAvoidingView } from "react-native";
import { useTheme } from "styled-components/native";
import { EnvelopeSimple, LockOpen, Check } from "phosphor-react-native";

import { Header } from "@components-of-screens/Authentication/components/Header";
import { Input } from "@components/Input";
import { SmallButton } from "@components/SmallButton";

import {
  Container,
  InputWrapper,
  ForgetPasswordButton,
  ForgetPasswordButtonText,
  Footer,
} from "../styles";

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
          keyboardType="email-address"
        />

        <Input
          style={{ marginBottom: 16 }}
          icon={() => (
            <LockOpen size={24} color={colors.components.input.placeholder} />
          )}
          isPassword
          placeholder="Senha"
        />

        <ForgetPasswordButton activeOpacity={0.7}>
          <ForgetPasswordButtonText>
            Esqueci minha senha
          </ForgetPasswordButtonText>
        </ForgetPasswordButton>
      </InputWrapper>

      <Footer>
        <SmallButton
          icon={() => (
            <Check
              color={colors.components.smallButton.icon}
              weight="bold"
              size={24}
            />
          )}
        />
      </Footer>
    </Container>
  );
};
