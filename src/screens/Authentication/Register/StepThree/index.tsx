import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { useRef, useCallback, FC } from "react";
import { TextInput } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { LockOpen, Check } from "phosphor-react-native";

import { useAuth } from "@hooks/useAuth";

import { Header } from "@components-of-screens/Authentication/components/Header";
import { Input } from "@components/Inputs/Input";
import { SmallButton } from "@components/Buttons/SmallButton";

import { InputBlurButton, Container, InputWrapper, Footer } from "../../styles";

export const StepThree: FC = () => {
  const { state: authState, dispatch: authDispatch, register } = useAuth();
  const { colors } = useTheme();

  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  const onPressInScreen = () => {
    passwordInputRef.current?.blur();
    confirmPasswordInputRef.current?.blur();
  };

  const onPressSubmit = () => {
    if (!authState.password.trim()) return;
    if (!authState.confirmPassword.trim()) return;

    register();
  };

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
          title="Crie sua conta!"
          description="Preencha com sua senha, depois a confirme."
        />

        <InputWrapper>
          <Input
            ref={passwordInputRef}
            style={{ marginBottom: 32 }}
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
            placeholder="Senha"
            isPassword
            maxLength={100}
          />

          <Input
            ref={confirmPasswordInputRef}
            style={{ marginBottom: 16 }}
            value={authState.confirmPassword}
            onChangeText={(text) =>
              authDispatch({
                type: "SET_FIELD",
                fieldName: "confirmPassword",
                payload: text,
              })
            }
            icon={() => (
              <LockOpen size={24} color={colors.components.input.placeholder} />
            )}
            isPassword
            placeholder="Confirmar senha"
            maxLength={100}
          />
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
            onPress={onPressSubmit}
          />
        </Footer>
      </Container>
    </InputBlurButton>
  );
};
