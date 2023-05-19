import { useState, FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { List, X } from 'phosphor-react-native';

import { useAppSelector } from '@hooks/useAppSelector';
import { useSettings } from '@hooks/useSettings';

import { Menu } from '@components-of-screens/Events/components/Menu';

import {
  Container,
  Wrapper,
  ProfileButton,
  UserImage,
  UserInfo,
  Greeting,
  Username,
  MenuButton,
} from './styles';

export const Header: FC = () => {
  const { user } = useAppSelector((store) => store.auth);
  const { fontSizeValue } = useSettings();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const formattedGivenName: string | undefined = user?.person.name.split(' ')[0];

  const onPressProfile = () => navigate('Profile');
  const onPressToggleMenu = () => setIsVisible((prevState) => !prevState);

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

      <MenuButton onPress={onPressToggleMenu}>
        {isVisible ? (
          <X size={fontSizeValue(24)} color={colors.icon900} />
        ) : (
          <List size={fontSizeValue(24)} color={colors.icon600} />
        )}
      </MenuButton>

      {isVisible && <Menu />}
    </Container>
  );
};
