import { useRef, FC } from "react";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { User, EnvelopeSimple, ArrowRight } from "phosphor-react-native";

import { useAuth } from "@hooks/useAuth";
import { useSettings } from "@hooks/useSettings";

import { Header } from "@components-of-screens/Authentication/components/Header";
import { Input } from "@components/Inputs/Input";
import { SmallButton } from "@components/Buttons/SmallButton";

import { InputBlurButton, Container, InputWrapper, Footer } from "../../styles";

export const StepOne: FC = () => {
  const { state: authState, dispatch: authDispatch } = useAuth();
  const { fontSizeValue } = useSettings();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const nameInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);

  const onPressInScreen = () => {
    nameInputRef.current?.blur();
    emailInputRef.current?.blur();
  };

  const onPressNextStep = () => {
    if (!authState.givenName.trim() || !authState.email.trim()) return;

    navigate("StepTwo");
  };

  const onPressBackButton = () => authDispatch({ type: "SET_EMPTY_FIELDS" });

  return (
    <InputBlurButton testID="StepOne.InputBlurButton" onPress={onPressInScreen}>
      <Container>
        <Header
          testID="StepOne.Header"
          title="Crie sua conta!"
          description="Vamos começar preenchendo seus dados, começando com seu nome."
          onBackButton={onPressBackButton}
        />

        <InputWrapper>
          <Input
            testID="StepOne.GivenNameInput"
            ref={nameInputRef}
            style={{ marginBottom: 32 }}
            value={authState.givenName}
            onChangeText={(text) =>
              authDispatch({
                type: "SET_FIELD",
                fieldName: "givenName",
                payload: text,
              })
            }
            icon={() => (
              <User
                size={fontSizeValue(24)}
                color={colors.components.input.placeholder}
              />
            )}
            placeholder="Nome e Sobrenome"
            maxLength={50}
          />

          <Input
            testID="StepOne.EmailInput"
            ref={emailInputRef}
            style={{ marginBottom: 16 }}
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
                size={fontSizeValue(24)}
                color={colors.components.input.placeholder}
              />
            )}
            placeholder="Email"
            keyboardType="email-address"
            maxLength={50}
          />
        </InputWrapper>

        <Footer>
          <SmallButton
            testID="StepOne.SmallButton"
            icon={() => (
              <ArrowRight
                size={fontSizeValue(24)}
                color={colors.components.smallButton.icon}
                weight="bold"
              />
            )}
            onPress={onPressNextStep}
          />
        </Footer>
      </Container>
    </InputBlurButton>
  );
};
