import { FC } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Funnel, SignOut } from 'phosphor-react-native';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useSettings } from '@hooks/useSettings';

import { logout } from '@store/auth/actions';

import { Container, Button, Title, Line } from './styles';

export const Menu: FC = () => {
  const dispatch = useAppDispatch();
  const { fontSizeValue } = useSettings();
  const { colors } = useTheme();

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
      <Button>
        <Funnel size={fontSizeValue(20)} color={colors.icon600} />
        <Title style={{ fontSize: fontSizeValue(16) }}>Filtrar</Title>
      </Button>

      <Line />

      <Button onPress={onPressLogOut}>
        <SignOut size={fontSizeValue(20)} color={colors.icon600} />
        <Title style={{ fontSize: fontSizeValue(16) }}>Sair</Title>
      </Button>
    </Container>
  );
};
