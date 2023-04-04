import { useRef, FC } from 'react';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { User, EnvelopeSimple, ArrowRight } from 'phosphor-react-native';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useSettings } from '@hooks/useSettings';

import { setEmptyFields, setGivenNameField, setEmailField } from '@store/auth/actions';

import { Header } from '@components-of-screens/Authentication/components/Header';
import { Input } from '@components/Inputs/Input';
import { SmallButton } from '@components/Buttons/SmallButton';

import { InputBlurButton, Container, InputWrapper, Footer } from '../../styles';

export const StepOne: FC = () => {
  const dispatch = useAppDispatch();
  const { givenName, email } = useAppSelector((store) => store.auth);
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
    if (!givenName.trim() || !email.trim()) return;

    navigate('StepTwo');
  };

  const onPressBackButton = () => dispatch(setEmptyFields());

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
            value={givenName}
            onChangeText={(text) => dispatch(setGivenNameField(text))}
            icon={() => (
              <User size={fontSizeValue(24)} color={colors.components.input.placeholder} />
            )}
            placeholder="Nome e Sobrenome"
            maxLength={50}
          />

          <Input
            testID="StepOne.EmailInput"
            ref={emailInputRef}
            style={{ marginBottom: 16 }}
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
