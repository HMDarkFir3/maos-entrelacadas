import { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAppSelector } from '@hooks/useAppSelector';
import { useSettings } from '@hooks/useSettings';

import {
  Container,
  Wrapper,
  ProfileButton,
  UserImage,
  UserInfo,
  Greeting,
  Username,
} from './styles';

export const Header: FC = () => {
  const { user } = useAppSelector((store) => store.auth);
  const { fontSizeValue } = useSettings();
  const { navigate } = useNavigation();

  const formattedGivenName: string | undefined = user?.person.name.split(' ')[0];

  const onPressProfile = () => navigate('Profile');

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
    </Container>
  );
};
