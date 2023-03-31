import { useRef, FC } from "react";
import { TextInput } from "react-native";
import { useTheme } from "styled-components/native";
import { LockOpen, Check } from "phosphor-react-native";

import { useAuth } from "@hooks/useAuth";
import { useSettings } from "@hooks/useSettings";

import { Header } from "@components-of-screens/Authentication/components/Header";
import { Input } from "@components/Inputs/Input";
import { SmallButton } from "@components/Buttons/SmallButton";

import { InputBlurButton, Container, InputWrapper, Footer } from "../../styles";

export const StepThree: FC = () => {
  const { state: authState, dispatch: authDispatch, register } = useAuth();
  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  const onPressInScreen = () => {
    passwordInputRef.current?.blur();
    confirmPasswordInputRef.current?.blur();
  };

  const onPressSubmit = () => {
    if (!authState.password.trim() || !authState.confirmPassword.trim()) return;

    register(
      authState.givenName,
      authState.email,
      authState.gender,
      authState.birthdate,
      authState.password
    );
  };

  return (
    <InputBlurButton
      testID="StepThree.InputBlurButton"
      onPress={onPressInScreen}
    >
      <Container>
        <Header
          testID="StepThree.Header"
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
              <LockOpen
                size={fontSizeValue(24)}
                color={colors.components.input.placeholder}
              />
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
              <LockOpen
                size={fontSizeValue(24)}
                color={colors.components.input.placeholder}
              />
            )}
            isPassword
            placeholder="Confirmar senha"
            maxLength={100}
          />
        </InputWrapper>

        <Footer>
          <SmallButton
            testID="StepThree.SmallButton"
            icon={() => (
              <Check
                color={colors.components.smallButton.icon}
                weight="bold"
                size={fontSizeValue(24)}
              />
            )}
            isLoading={authState.isLoading}
            onPress={onPressSubmit}
          />
        </Footer>
      </Container>
    </InputBlurButton>
  );
};
