import { FC } from 'react';
import { FlatList } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useTheme } from 'styled-components/native';
import { GenderNeuter, Cake, LockOpen, Check } from 'phosphor-react-native';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useSettings } from '@hooks/useSettings';
import { useKeyboard } from '@hooks/useKeyboard';

import { register } from '@store/auth/thunks/register';
import { StepOneFormState, StepTwoFormState, RegisterFormState } from '@store/auth/types';

import { Header } from '@components-of-screens/Authentication/components/Header';
import { Select } from '@components/Inputs/Select';
import { DatePicker } from '@components/Inputs/DatePicker';
import { Input } from '@components/Inputs/Input';
import { SmallButton } from '@components/Buttons/SmallButton';

import { Container, Wrapper, InputWrapper, Footer } from '../../styles';

interface Params {
  formStepOne: StepOneFormState;
}

export const StepTwo: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((store) => store.auth);
  const { genders } = useAppSelector((store) => store.settings);
  const { fontSizeValue } = useSettings();
  const { keyboardShown } = useKeyboard();
  const { colors } = useTheme();

  const route = useRoute();
  const { formStepOne } = route.params as Params;

  const schema = yup
    .object({
      gender: yup.string().required('Gênero obrigatório.'),
      birthdate: yup.string().required('Data de nascimento obrigatória.'),
      password: yup
        .string()
        .required('Senha obrigatória.')
        .min(8, 'Mínimo de 8 caracteres.')
        .equals([yup.ref('confirmPassword')], 'Senhas não conferem.'),
      confirmPassword: yup
        .string()
        .required('Senha obrigatória.')
        .min(8, 'Mínimo de 8 caracteres.')
        .equals([yup.ref('password')], 'Senhas não conferem.'),
    })
    .required();

  const {
    control,
    handleSubmit,
    reset,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<StepTwoFormState>({
    defaultValues: { gender: '', birthdate: '', password: '', confirmPassword: '' },
    resolver: yupResolver(schema),
  });

  const onPressBackButton = () => {
    reset();
    clearErrors();
  };

  const onSubmit = (data: StepTwoFormState) => {
    const formattedBirthdate = format(new Date(data.birthdate as string), 'yyyy-MM-dd', {
      locale: ptBR,
    });

    const formInfo: RegisterFormState = {
      ...formStepOne,
      ...data,
      birthdate: formattedBirthdate,
    };

    dispatch(register(formInfo));
  };

  return (
    <Container>
      <Header
        testID="StepTwo.Header"
        title="Crie sua conta!"
        description="Selecione seu gênero e preecha sua data de nascimento."
        keyboardShown={keyboardShown}
        onBackButton={onPressBackButton}
      />

      <FlatList
        data={[0]}
        keyExtractor={(item) => String(item)}
        renderItem={() => (
          <Wrapper>
            <InputWrapper>
              <Select
                style={{ marginBottom: 32 }}
                control={control}
                selectName="gender"
                dirtyValue={watch().gender}
                error={errors.gender?.message}
                icon={() => <GenderNeuter size={fontSizeValue(24)} color={colors.placeholder} />}
                placeholder="Gênero"
                data={genders}
              />

              <DatePicker
                testDateTimePickerModalID="StepTwo.DatePicker"
                style={{ marginBottom: 32 }}
                control={control}
                datePickerName="birthdate"
                dirtyValue={watch().birthdate}
                error={errors.birthdate?.message}
                icon={() => <Cake size={fontSizeValue(24)} color={colors.placeholder} />}
                placeholder="Data de Nascimento"
              />

              <Input
                testID="StepTwo.PasswordInput"
                style={{ marginBottom: 24 }}
                control={control}
                inputName="password"
                dirtyValue={watch().password}
                error={errors.password?.message}
                icon={() => <LockOpen size={fontSizeValue(24)} color={colors.placeholder} />}
                placeholder="Senha"
                isPassword
                maxLength={100}
              />

              <Input
                testID="StepTwo.ConfirmPasswordInput"
                control={control}
                inputName="confirmPassword"
                dirtyValue={watch().confirmPassword}
                error={errors.confirmPassword?.message}
                icon={() => <LockOpen size={fontSizeValue(24)} color={colors.placeholder} />}
                isPassword
                placeholder="Confirmar senha"
                maxLength={100}
              />
            </InputWrapper>
          </Wrapper>
        )}
        showsVerticalScrollIndicator={false}
      />

      <Footer>
        <SmallButton
          testID="StepTwo.SmallButton"
          icon={() => <Check color={colors.icon40} weight="bold" size={fontSizeValue(24)} />}
          isLoading={isLoading}
          onPress={handleSubmit((data: StepTwoFormState) => onSubmit(data))}
        />
      </Footer>
    </Container>
  );
};
