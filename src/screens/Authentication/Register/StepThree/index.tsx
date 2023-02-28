import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { useRef, useCallback, FC } from "react";
import { TextInput } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { LockOpen, Check } from "phosphor-react-native";

import { Header } from "@components-of-screens/Authentication/components/Header";
import { Input } from "@components/Inputs/Input";
import { SmallButton } from "@components/Buttons/SmallButton";

import { InputBlurButton, Container, InputWrapper, Footer } from "../../styles";

export const StepThree: FC = () => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  useFocusEffect(
    useCallback(() => {
      NavigationBar.setBackgroundColorAsync(
        colors.navigationBar.backgroundPrimary
      );
      NavigationBar.setButtonStyleAsync("dark");
    }, [])
  );

  return (
    <InputBlurButton>
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
            icon={() => (
              <LockOpen size={24} color={colors.components.input.placeholder} />
            )}
            placeholder="Senha"
            isPassword
          />

          <Input
            ref={confirmPasswordInputRef}
            style={{ marginBottom: 16 }}
            icon={() => (
              <LockOpen size={24} color={colors.components.input.placeholder} />
            )}
            isPassword
            placeholder="Confirmar senha"
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
          />
        </Footer>
      </Container>
    </InputBlurButton>
  );
};
