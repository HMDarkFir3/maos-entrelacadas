import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { useRef, useCallback, FC } from "react";
import { TextInput } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { EnvelopeSimple, LockOpen, Check } from "phosphor-react-native";

import { useAuth } from "@hooks/useAuth";

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
  const { state: authState, dispatch: authDispatch, login } = useAuth();
  const { colors } = useTheme();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const onPressInScreen = () => {
    emailInputRef.current?.blur();
    passwordInputRef.current?.blur();
  };

  const onPressLogin = () => login();

  const onPressBackButton = () => authDispatch({ type: "SET_EMPTY_FIELDS" });

  useFocusEffect(
    useCallback(() => {
      NavigationBar.setBackgroundColorAsync(
        colors.navigationBar.backgroundPrimary
      );
      NavigationBar.setButtonStyleAsync("dark");
    }, [])
  );

  return (
    <InputBlurButton onPress={onPressInScreen}>
      <Container>
        <StatusBar
          backgroundColor={colors.statusBar.backgroundPrimary}
          style="dark"
        />

        <Header
          title="Faça login"
          description="Queremos impactar de forma positiva a sua vida e de sua comunidade."
          onBackButton={onPressBackButton}
        />

        <InputWrapper>
          <Input
            ref={emailInputRef}
            style={{ marginBottom: 32 }}
            value={authState.email}
            onChangeText={(text) =>
              authDispatch({
                type: "SET_FIELD",
                fieldName: "email",
                payload: text,
              })
            }
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
            ref={passwordInputRef}
            style={{ marginBottom: 16 }}
            value={authState.password}
            onChangeText={(text) =>
              authDispatch({
                type: "SET_FIELD",
                fieldName: "password",
                payload: text,
              })
            }
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
            onPress={onPressLogin}
          />
        </Footer>
      </Container>
    </InputBlurButton>
  );
};
