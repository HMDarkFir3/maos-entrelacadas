import { FC } from 'react';
import { FlatList } from 'react-native';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components/native';
import {
  UserSquare,
  User,
  EnvelopeSimple,
  Phone,
  GenderNeuter,
  Cake,
  LockOpen,
} from 'phosphor-react-native';

import { UpdateDTO } from '@dtos/UpdateDTO';

import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useSettings } from '@hooks/useSettings';
import { useKeyboard } from '@hooks/useKeyboard';

import { userEdit } from '@store/auth/actions';
import { update } from '@store/auth/thunks/update';

import { Header } from '@components-of-screens/UserInfo/components/Header';
import { Input } from '@components/Inputs/Input';
import { Select } from '@components/Inputs/Select';
import { DatePicker } from '@components/Inputs/DatePicker';
import { Button } from '@components/Buttons/Button';

import { Container, Wrapper, Footer } from './styles';

interface FormUpdateState {
  status: string | undefined;
  name: string | undefined;
  username: string | undefined;
  email: string | undefined;
  cellphone: string | undefined;
  gender: string | undefined;
  birthdate: string | undefined;
  password: string | undefined;
}

export const UserInfo: FC = () => {
  const { user, isLoading } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();
  const { isEditable } = useAppSelector((store) => store.auth);
  const { genders } = useAppSelector((store) => store.settings);
  const { fontSizeValue } = useSettings();
  const { keyboardShown } = useKeyboard();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      status: user?.status,
      name: user?.person.name,
      username: user?.username,
      email: user?.email,
      cellphone: user?.cellphone,
      gender: user?.person.gender.id,
      birthdate: user?.person.birthdate,
      password: '********',
    },
  });
  const { colors } = useTheme();

  const onBackButton = () => dispatch(userEdit(false));
  const onPressEdit = () => dispatch(userEdit(true));
  const onPressCancelEdit = () => dispatch(userEdit(false));

  const onSubmit = (data: FormUpdateState) => {
    const userInfo = {
      data: {
        username: data.username,
        person: {
          name: data.name,
          gender: {
            name: data.gender,
          },
        },
      } as UpdateDTO.Request,
      id: user?.id,
    };

    dispatch(update(userInfo));
  };

  return (
    <Container>
      <Header
        isEditable={isEditable}
        keyboardShown={keyboardShown}
        onBackButton={onBackButton}
        onEdit={onPressEdit}
        onCancelEdit={onPressCancelEdit}
      />

      <FlatList
        data={[0]}
        keyExtractor={(item) => String(item)}
        renderItem={() => (
          <Wrapper>
            <Input
              icon={() => <UserSquare size={fontSizeValue(24)} color={colors.placeholder} />}
              control={control}
              inputName="status"
              isEditable={false}
            />

            <Input
              style={{ marginTop: 20 }}
              icon={() => <User size={fontSizeValue(24)} color={colors.placeholder} />}
              control={control}
              inputName="name"
              isEditable={isEditable}
            />

            <Input
              style={{ marginTop: 20 }}
              icon={() => <User size={fontSizeValue(24)} color={colors.placeholder} />}
              control={control}
              inputName="username"
              isEditable={isEditable}
            />

            <Input
              style={{ marginTop: 20 }}
              icon={() => <EnvelopeSimple size={fontSizeValue(24)} color={colors.placeholder} />}
              control={control}
              inputName="email"
              isEditable={false}
            />

            <Input
              style={{ marginTop: 20 }}
              icon={() => <Phone size={fontSizeValue(24)} color={colors.placeholder} />}
              control={control}
              inputName="cellphone"
              isEditable={false}
            />

            <Select
              style={{ marginTop: 20 }}
              data={genders}
              icon={() => <GenderNeuter size={fontSizeValue(24)} color={colors.placeholder} />}
              control={control}
              selectName="gender"
              dirtyValue={user?.person.gender.name}
              placeholder="Selecione um gênero"
              isEditable={isEditable}
            />

            <DatePicker
              style={{ marginTop: 20 }}
              icon={() => <Cake size={fontSizeValue(24)} color={colors.placeholder} />}
              control={control}
              datePickerName="birthdate"
              dirtyValue={user?.person.birthdate}
              placeholder="Selecione sua data de nascimento"
              isEditable={false}
            />

            <Input
              style={{ marginTop: 20 }}
              icon={() => <LockOpen size={fontSizeValue(24)} color={colors.placeholder} />}
              control={control}
              inputName="password"
              isEditable={false}
            />
          </Wrapper>
        )}
        showsVerticalScrollIndicator={false}
      />

      {isEditable && (
        <Footer>
          <Button
            title="Salvar"
            isLoading={isLoading}
            onPress={handleSubmit((data: FormUpdateState) => onSubmit(data))}
            enabled={!isLoading}
          />
        </Footer>
      )}
    </Container>
  );
};
