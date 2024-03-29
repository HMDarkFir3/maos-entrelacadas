import { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { Info } from 'phosphor-react-native';

import { useAppSelector } from '@hooks/useAppSelector';
import { useSettings } from '@hooks/useSettings';

import { Container, Wrapper, UserImage, UserInfo, Username, Role } from './styles';

export const Header: FC = () => {
  const { user } = useAppSelector((store) => store.auth);
  const { fontSizeValue } = useSettings();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const onPressUserInfo = () => navigate('UserInfo');

  return (
    <Container testID="Header.Container" onPress={onPressUserInfo}>
      <Wrapper>
        <UserImage
          source={user?.image?.url ? { uri: user.image.url } : require('@assets/img/empty.png')}
        />

        <UserInfo>
          <Username style={{ fontSize: fontSizeValue(20) }} numberOfLines={1}>
            {user?.person.name}
          </Username>
          <Role style={{ fontSize: fontSizeValue(16) }}>{user?.status}</Role>
        </UserInfo>
      </Wrapper>

      <Info size={fontSizeValue(24)} color={colors.icon600} />
    </Container>
  );
};
