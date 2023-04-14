import { useRef, FC } from 'react';
import { TextInput } from 'react-native';
import { useTheme } from 'styled-components/native';
import { LockOpen, Check } from 'phosphor-react-native';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useAuth } from '@hooks/useAuth';
import { useSettings } from '@hooks/useSettings';

import { setPasswordField, setConfirmPasswordField } from '@store/auth/actions';

import { Header } from '@components-of-screens/Authentication/components/Header';
import { Input } from '@components/Inputs/Input';
import { SmallButton } from '@components/Buttons/SmallButton';

import { InputBlurButton, Container, InputWrapper, Footer } from '../../styles';

export const StepThree: FC = () => {
  const dispatch = useAppDispatch();
  const { password, confirmPassword, isLoading } = useAppSelector((store) => store.auth);
  const { register } = useAuth();
  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  const onPressInScreen = () => {
    passwordInputRef.current?.blur();
    confirmPasswordInputRef.current?.blur();
  };

  const onPressSubmit = () => {
    if (!password.trim() || !confirmPassword.trim()) return;

    register();
  };

  return (
    <InputBlurButton testID="StepThree.InputBlurButton" onPress={onPressInScreen}>
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
            ref={confirmPasswordInputRef}
            style={{ marginBottom: 16 }}
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
            testID="StepThree.SmallButton"
            icon={() => (
              <Check
                color={colors.components.smallButton.icon}
                weight="bold"
                size={fontSizeValue(24)}
              />
            )}
            isLoading={isLoading}
            onPress={onPressSubmit}
          />
        </Footer>
      </Container>
    </InputBlurButton>
  );
};
