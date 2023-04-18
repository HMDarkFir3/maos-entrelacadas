import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components/native';
import {
  UserSquare,
  User,
  EnvelopeSimple,
  GenderNeuter,
  Cake,
  LockOpen,
} from 'phosphor-react-native';

import { useAppSelector } from '@hooks/useAppSelector';
import { useSettings } from '@hooks/useSettings';

import { Header } from '@components-of-screens/UserInfo/components/Header';
import { Input } from '@components/Inputs/Input';
import { Select } from '@components/Inputs/Select';
import { DatePicker } from '@components/Inputs/DatePicker';

import { Container, Wrapper } from './styles';

export const UserInfo: FC = () => {
  const { user } = useAppSelector((store) => store.auth);
  const { genders } = useAppSelector((store) => store.settings);
  const { fontSizeValue } = useSettings();
  const { control } = useForm({
    defaultValues: {
      status: user?.status,
      name: user?.person.name,
      email: user?.email,
      gender: user?.person.gender.id,
      birthdate: user?.person.birthdate,
      password: '********',
    },
  });
  const { colors } = useTheme();

  return (
    <Container>
      <Header />

      <Wrapper>
        <Input
          icon={() => (
            <UserSquare size={fontSizeValue(24)} color={colors.components.input.placeholder} />
          )}
          control={control}
          inputName="status"
          isEditable={false}
        />

        <Input
          style={{ marginTop: 20 }}
          icon={() => <User size={fontSizeValue(24)} color={colors.components.input.placeholder} />}
          control={control}
          inputName="name"
          isEditable={false}
        />

        <Input
          style={{ marginTop: 20 }}
          icon={() => (
            <EnvelopeSimple size={fontSizeValue(24)} color={colors.components.input.placeholder} />
          )}
          control={control}
          inputName="email"
          isEditable={false}
        />

        <Select
          style={{ marginTop: 20 }}
          data={genders}
          icon={() => (
            <GenderNeuter size={fontSizeValue(24)} color={colors.components.input.placeholder} />
          )}
          control={control}
          selectName="gender"
          dirtyValue={user?.person.gender.name}
          placeholder="Selecione um gênero"
          isEditable={false}
        />

        <DatePicker
          style={{ marginTop: 20 }}
          icon={() => <Cake size={fontSizeValue(24)} color={colors.components.input.placeholder} />}
          control={control}
          datePickerName="birthdate"
          dirtyValue={user?.person.birthdate}
          placeholder="Selecione sua data de nascimento"
          isEditable={false}
        />

        <Input
          style={{ marginTop: 20 }}
          icon={() => (
            <LockOpen size={fontSizeValue(24)} color={colors.components.input.placeholder} />
          )}
          control={control}
          inputName="password"
          isEditable={false}
        />
      </Wrapper>
    </Container>
  );
};
