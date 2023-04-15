import { useRef, FC } from 'react';
import { TextInput } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { User, EnvelopeSimple, Phone, ArrowRight } from 'phosphor-react-native';

import { useSettings } from '@hooks/useSettings';

import { StepOneFormState } from '@contexts/AuthContext';

import { Header } from '@components-of-screens/Authentication/components/Header';
import { Input } from '@components/Inputs/Input';
import { SmallButton } from '@components/Buttons/SmallButton';

import { InputBlurButton, Container, InputWrapper, Footer } from '../../styles';

export const StepOne: FC = () => {
  const { fontSizeValue } = useSettings();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const givenNameInputRef = useRef<TextInput>(null);
  const usernameInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);
  const cellphoneInputRef = useRef<TextInput>(null);

  const schema = yup
    .object({
      givenName: yup.string().required('Nome obrigatório.'),
      username: yup.string().required('Usuário obrigatório.'),
      email: yup.string().email('Email inválido.').required('Email obrigatório.'),
      cellphone: yup.string().required('Celular obrigatório.').min(11, 'Celular inválido.'),
    })
    .required();

  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    watch,
    formState: { errors },
  } = useForm<StepOneFormState>({
    defaultValues: {
      givenName: '',
      username: '',
      email: '',
      cellphone: '',
    },

    resolver: yupResolver(schema),
  });

  const onPressInScreen = () => {
    givenNameInputRef.current?.blur();
    usernameInputRef.current?.blur();
    emailInputRef.current?.blur();
    cellphoneInputRef.current?.blur();
  };

  const onPressBackButton = () => {
    reset();
    clearErrors();
  };

  const onSubmit = (data: StepOneFormState) => {
    navigate('StepTwo', { formStepOne: data });
  };

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
            ref={givenNameInputRef}
            style={{ marginBottom: 16 }}
            control={control}
            inputName="givenName"
            dirtyValue={watch().givenName}
            error={errors.givenName?.message}
            icon={() => (
              <User size={fontSizeValue(24)} color={colors.components.input.placeholder} />
            )}
            placeholder="Nome e Sobrenome"
            maxLength={50}
          />

          <Input
            testID="StepOne.UsernameInput"
            ref={usernameInputRef}
            style={{ marginBottom: 16 }}
            control={control}
            inputName="username"
            dirtyValue={watch().username}
            error={errors.username?.message}
            icon={() => (
              <User size={fontSizeValue(24)} color={colors.components.input.placeholder} />
            )}
            placeholder="Usuário"
            maxLength={50}
          />

          <Input
            testID="StepOne.EmailInput"
            ref={emailInputRef}
            style={{ marginBottom: 16 }}
            control={control}
            inputName="email"
            dirtyValue={watch().email}
            error={errors.email?.message}
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

          <Input
            testID="StepOne.CellphoneInput"
            ref={cellphoneInputRef}
            style={{ marginBottom: 16 }}
            control={control}
            inputName="cellphone"
            dirtyValue={watch().cellphone}
            error={errors.cellphone?.message}
            icon={() => (
              <Phone size={fontSizeValue(24)} color={colors.components.input.placeholder} />
            )}
            placeholder="Celular"
            keyboardType="phone-pad"
            maxLength={11}
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
            onPress={handleSubmit((data) => onSubmit(data))}
          />
        </Footer>
      </Container>
    </InputBlurButton>
  );
};
