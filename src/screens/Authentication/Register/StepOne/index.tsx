import { FC } from 'react';
import { FlatList } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { User, EnvelopeSimple, Phone, ArrowRight } from 'phosphor-react-native';

import { useSettings } from '@hooks/useSettings';
import { useKeyboard } from '@hooks/useKeyboard';

import { StepOneFormState } from '@store/auth/types';

import { Header } from '@components-of-screens/Authentication/components/Header';
import { Input } from '@components/Inputs/Input';
import { SmallButton } from '@components/Buttons/SmallButton';

import { Container, Wrapper, InputWrapper, Footer } from '../../styles';

export const StepOne: FC = () => {
  const { fontSizeValue } = useSettings();
  const { keyboardShown } = useKeyboard();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

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

  const onPressBackButton = () => {
    reset();
    clearErrors();
  };

  const onSubmit = (data: StepOneFormState) => {
    navigate('StepTwo', { formStepOne: data });
  };

  return (
    <Container>
      <Header
        testID="StepOne.Header"
        title="Crie sua conta!"
        description="Vamos começar preenchendo seus dados, começando com seu nome."
        keyboardShown={keyboardShown}
        onBackButton={onPressBackButton}
      />

      <FlatList
        data={[0]}
        keyExtractor={(item) => String(item)}
        renderItem={() => (
          <Wrapper>
            <InputWrapper>
              <Input
                testID="StepOne.GivenNameInput"
                style={{ marginBottom: 16 }}
                control={control}
                inputName="givenName"
                dirtyValue={watch().givenName}
                error={errors.givenName?.message}
                icon={() => <User size={fontSizeValue(24)} color={colors.placeholder} />}
                placeholder="Nome e Sobrenome"
                maxLength={50}
              />

              <Input
                testID="StepOne.UsernameInput"
                style={{ marginBottom: 16 }}
                control={control}
                inputName="username"
                dirtyValue={watch().username}
                error={errors.username?.message}
                icon={() => <User size={fontSizeValue(24)} color={colors.placeholder} />}
                placeholder="Usuário"
                maxLength={50}
              />

              <Input
                testID="StepOne.EmailInput"
                style={{ marginBottom: 16 }}
                control={control}
                inputName="email"
                dirtyValue={watch().email}
                error={errors.email?.message}
                icon={() => <EnvelopeSimple size={fontSizeValue(24)} color={colors.placeholder} />}
                placeholder="Email"
                keyboardType="email-address"
                maxLength={50}
              />

              <Input
                testID="StepOne.CellphoneInput"
                style={{ marginBottom: 16 }}
                control={control}
                inputName="cellphone"
                dirtyValue={watch().cellphone}
                error={errors.cellphone?.message}
                icon={() => <Phone size={fontSizeValue(24)} color={colors.placeholder} />}
                placeholder="Celular"
                keyboardType="phone-pad"
                maxLength={11}
              />
            </InputWrapper>
          </Wrapper>
        )}
        showsVerticalScrollIndicator={false}
      />

      <Footer>
        <SmallButton
          testID="StepOne.SmallButton"
          icon={() => <ArrowRight size={fontSizeValue(24)} color={colors.icon40} weight="bold" />}
          onPress={handleSubmit((data) => onSubmit(data))}
        />
      </Footer>
    </Container>
  );
};
