import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { useRef, useCallback, FC } from "react";
import { TextInput } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { User, EnvelopeSimple, ArrowRight } from "phosphor-react-native";

import { Header } from "@components-of-screens/Authentication/components/Header";
import { Input } from "@components/Inputs/Input";
import { SmallButton } from "@components/Buttons/SmallButton";

import { InputBlurButton, Container, InputWrapper, Footer } from "../../styles";

export const StepOne: FC = () => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const userInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);

  const onPressInScreen = () => {
    userInputRef.current?.blur();
    emailInputRef.current?.blur();
  };

  const onPressNextStep = () => navigate("StepTwo");

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
          description="Vamos começar preenchendo seus dados, começando com seu nome."
        />

        <InputWrapper>
          <Input
            ref={userInputRef}
            style={{ marginBottom: 32 }}
            icon={() => (
              <User size={24} color={colors.components.input.placeholder} />
            )}
            placeholder="Usuário"
          />

          <Input
            ref={emailInputRef}
            style={{ marginBottom: 16 }}
            icon={() => (
              <EnvelopeSimple
                size={24}
                color={colors.components.input.placeholder}
              />
            )}
            placeholder="Email"
            keyboardType="email-address"
          />
        </InputWrapper>

        <Footer>
          <SmallButton
            icon={() => (
              <ArrowRight
                color={colors.components.smallButton.icon}
                weight="bold"
                size={24}
              />
            )}
            onPress={onPressNextStep}
          />
        </Footer>
      </Container>
    </InputBlurButton>
  );
};
