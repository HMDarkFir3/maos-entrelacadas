import { useRef, FC } from 'react';
import { TextInput } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTheme } from 'styled-components/native';
import { EnvelopeSimple, LockOpen, Check } from 'phosphor-react-native';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useSettings } from '@hooks/useSettings';

import { login } from '@store/auth/thunks/login';
import { LoginFormState } from '@store/auth/types';

import { Header } from '@components-of-screens/Authentication/components/Header';
import { Input } from '@components/Inputs/Input';
import { SmallButton } from '@components/Buttons/SmallButton';

import {
  InputBlurButton,
  Container,
  InputWrapper,
  ForgetPasswordContainer,
  ForgetPasswordButton,
  ForgetPasswordButtonText,
  Footer,
} from '../styles';

export const Login: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((store) => store.auth);
  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const schema = yup
    .object({
      email: yup.string().email('Email inválido.').required('Email obrigatório.'),
      password: yup.string().required('Senha obrigatória.').min(8, 'Mínimo de 8 caracteres.'),
    })
    .required();

  const {
    control,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<LoginFormState>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onPressInScreen = () => {
    emailInputRef.current?.blur();
    passwordInputRef.current?.blur();
  };

  const onPressBackButton = () => {
    reset();
    clearErrors();
  };

  const onSubmit = async (data: LoginFormState) => dispatch(login(data));

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
            control={control}
            inputName="email"
            error={errors.email?.message}
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
            control={control}
            inputName="password"
            error={errors.password?.message}
            icon={() => (
              <LockOpen size={fontSizeValue(24)} color={colors.components.input.placeholder} />
            )}
            isPassword
            placeholder="Senha"
          />

          <ForgetPasswordContainer>
            <ForgetPasswordButton>
              <ForgetPasswordButtonText style={{ fontSize: fontSizeValue(16) }} numberOfLines={2}>
                Esqueci minha senha
              </ForgetPasswordButtonText>
            </ForgetPasswordButton>
          </ForgetPasswordContainer>
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
            onPress={handleSubmit((data: LoginFormState) => onSubmit(data))}
            enabled={!isLoading}
          />
        </Footer>
      </Container>
    </InputBlurButton>
  );
};
