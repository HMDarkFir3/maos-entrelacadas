import { FC } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { SignOut } from 'phosphor-react-native';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useSettings } from '@hooks/useSettings';

import { logout } from '@store/auth/actions';

import {
  Container,
  Wrapper,
  ProfileButton,
  UserImage,
  UserInfo,
  Greeting,
  Username,
  SignOutButton,
} from './styles';

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.auth);
  const { fontSizeValue } = useSettings();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const formattedGivenName: string | undefined = user?.person.name.split(' ')[0];

  console.log(user);

  const onPressProfile = () => navigate('Profile');

  const onPressLogOut = () => {
    Alert.alert(
      'Sair',
      'Deseja sair da aplicação?',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => dispatch(logout()),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <Container>
      <Wrapper>
        <ProfileButton testID="Header.ProfileButton" onPress={onPressProfile}>
          <UserImage source={{ uri: 'https://www.github.com/hmdarkfir3.png' }} />
        </ProfileButton>
        <UserInfo>
          <Greeting style={{ fontSize: fontSizeValue(20) }}>Olá,</Greeting>
          <Username style={{ fontSize: fontSizeValue(20) }}>{formattedGivenName}</Username>
        </UserInfo>
      </Wrapper>

      <SignOutButton testID="Header.SignOutButton" onPress={onPressLogOut}>
        <SignOut size={fontSizeValue(24)} color={colors.screens.home.components.header.icon} />
      </SignOutButton>
    </Container>
  );
};
