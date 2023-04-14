import { useRef, FC } from 'react';
import { TextInput } from 'react-native';
import { useTheme } from 'styled-components/native';
import { GenderNeuter, Cake, LockOpen, Check } from 'phosphor-react-native';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useAuth } from '@hooks/useAuth';
import { useSettings } from '@hooks/useSettings';

import {
  setEmptyFields,
  setGenderField,
  setBirthdateField,
  setPasswordField,
  setConfirmPasswordField,
} from '@store/auth/actions';

import { Header } from '@components-of-screens/Authentication/components/Header';
import { Select } from '@components/Inputs/Select';
import { DatePicker } from '@components/Inputs/DatePicker';
import { Input } from '@components/Inputs/Input';
import { SmallButton } from '@components/Buttons/SmallButton';

import { InputBlurButton, Container, InputWrapper, Footer } from '../../styles';

export const StepTwo: FC = () => {
  const dispatch = useAppDispatch();
  const { gender, birthdate, password, confirmPassword } = useAppSelector((store) => store.auth);
  const { genders } = useAppSelector((store) => store.settings);
  const { register } = useAuth();
  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  const onPressInScreen = () => {
    passwordInputRef.current?.blur();
    confirmPasswordInputRef.current?.blur();
  };

  const onPressRegister = () => {
    if (!gender || !birthdate) return;

    register();
  };

  const onPressBackButton = () => dispatch(setEmptyFields());

  return (
    <InputBlurButton testID="StepTwo.InputBlurButton" onPress={onPressInScreen}>
      <Container>
        <Header
          testID="StepTwo.Header"
          title="Crie sua conta!"
          description="Selecione seu gênero e preecha sua data de nascimento."
          onBackButton={onPressBackButton}
        />

        <InputWrapper>
          <Select
            style={{ marginBottom: 32 }}
            value={gender}
            onChange={(item: string) => dispatch(setGenderField(item))}
            icon={() => (
              <GenderNeuter size={fontSizeValue(24)} color={colors.components.select.placeholder} />
            )}
            placeholder="Gênero"
            data={genders}
          />

          <DatePicker
            testDateTimePickerModalID="StepTwo.DatePicker"
            style={{ marginBottom: 32 }}
            value={birthdate}
            onChange={(date: Date) => dispatch(setBirthdateField(date.toISOString()))}
            icon={() => (
              <Cake size={fontSizeValue(24)} color={colors.components.datePicker.placeholder} />
            )}
            placeholder="Data de Nascimento"
          />

          <Input
            testID="StepTwo.PasswordInput"
            ref={passwordInputRef}
            style={{ marginBottom: 24 }}
            value={password}
            onChangeText={(text) => dispatch(setPasswordField(text))}
            icon={() => (
              <LockOpen size={fontSizeValue(24)} color={colors.components.input.placeholder} />
            )}
            placeholder="Senha"
            isPassword
            maxLength={100}
          />

          <Input
            testID="StepTwo.ConfirmPasswordInput"
            ref={confirmPasswordInputRef}
            value={confirmPassword}
            onChangeText={(text) => dispatch(setConfirmPasswordField(text))}
            icon={() => (
              <LockOpen size={fontSizeValue(24)} color={colors.components.input.placeholder} />
            )}
            isPassword
            placeholder="Confirmar senha"
            maxLength={100}
          />
        </InputWrapper>

        <Footer>
          <SmallButton
            testID="StepTwo.SmallButton"
            icon={() => (
              <Check
                color={colors.components.smallButton.icon}
                weight="bold"
                size={fontSizeValue(24)}
              />
            )}
            onPress={onPressRegister}
          />
        </Footer>
      </Container>
    </InputBlurButton>
  );
};
