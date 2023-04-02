import { useRef, FC } from "react";
import { TextInput } from "react-native";
import { useTheme } from "styled-components/native";
import { EnvelopeSimple, LockOpen, Check } from "phosphor-react-native";

import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { useAuth } from "@hooks/useAuth";
import { useSettings } from "@hooks/useSettings";

import {
  setEmailField,
  setPasswordField,
  setEmptyFields,
} from "@store/auth/actions";

import { Header } from "@components-of-screens/Authentication/components/Header";
import { Input } from "@components/Inputs/Input";
import { SmallButton } from "@components/Buttons/SmallButton";

import {
  InputBlurButton,
  Container,
  InputWrapper,
  ForgetPasswordButton,
  ForgetPasswordButtonText,
  Footer,
} from "../styles";

export const Login: FC = () => {
  const dispatch = useAppDispatch();
  const { email, password, isLoading } = useAppSelector((store) => store.auth);
  const { login } = useAuth();
  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const onPressInScreen = () => {
    emailInputRef.current?.blur();
    passwordInputRef.current?.blur();
  };

  const onPressLogin = () => login(email, password);

  const onPressBackButton = () => setEmptyFields();

  return (
    <InputBlurButton testID="Login.InputBlurButton" onPress={onPressInScreen}>
      <Container>
        <Header
          testID="Login.Header"
          title="Faça login"
          description="Queremos impactar de forma positiva a sua vida e de sua comunidade."
          onBackButton={onPressBackButton}
        />

        <InputWrapper>
          <Input
            ref={emailInputRef}
            style={{ marginBottom: 32 }}
            value={email}
            onChangeText={(text) => dispatch(setEmailField(text))}
            icon={() => (
              <EnvelopeSimple
                size={fontSizeValue(24)}
                color={colors.components.input.placeholder}
              />
            )}
            placeholder="Email"
            keyboardType="email-address"
          />

          <Input
            ref={passwordInputRef}
            style={{ marginBottom: 16 }}
            value={password}
            onChangeText={(text) => dispatch(setPasswordField(text))}
            icon={() => (
              <LockOpen
                size={fontSizeValue(24)}
                color={colors.components.input.placeholder}
              />
            )}
            isPassword
            placeholder="Senha"
          />

          <ForgetPasswordButton>
            <ForgetPasswordButtonText
              style={{ fontSize: fontSizeValue(16) }}
              numberOfLines={2}
            >
              Esqueci minha senha
            </ForgetPasswordButtonText>
          </ForgetPasswordButton>
        </InputWrapper>

        <Footer>
          <SmallButton
            testID="Login.SmallButton"
            icon={() => (
              <Check
                color={colors.components.smallButton.icon}
                weight="bold"
                size={fontSizeValue(24)}
              />
            )}
            isLoading={isLoading}
            onPress={onPressLogin}
            enabled={!isLoading}
          />
        </Footer>
      </Container>
    </InputBlurButton>
  );
};
