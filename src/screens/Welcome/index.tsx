import { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useSettings } from '@hooks/useSettings';

import { Button } from '@components/Buttons/Button';

import {
  Container,
  Logo,
  TextWrapper,
  Title,
  Description,
  ButtonWrapper,
  RegisterButton,
  RegisterButtonText,
} from './styles';

export const Welcome: FC = () => {
  const { fontSizeValue } = useSettings();
  const { navigate } = useNavigation();

  const onPressLogin = (screenName: 'Login' | 'StepOne') => navigate(screenName);

  return (
    <Container>
      <Logo source={require('@assets/img/logo.png')} />

      <TextWrapper>
        <Title style={{ fontSize: fontSizeValue(48) }} numberOfLines={1}>
          Boas-vindas!
        </Title>
        <Description style={{ fontSize: fontSizeValue(20) }} numberOfLines={3}>
          Queremos impactar de forma positiva a sua vida e de sua comunidade.
        </Description>
      </TextWrapper>

      <ButtonWrapper>
        <Button style={{ marginBottom: 16 }} title="Login" onPress={() => onPressLogin('Login')} />

        <RegisterButton testID="Welcome.RegisterButton" onPress={() => onPressLogin('StepOne')}>
          <RegisterButtonText style={{ fontSize: fontSizeValue(20) }} isGreen={false}>
            Não tem uma conta?{' '}
            <RegisterButtonText style={{ fontSize: fontSizeValue(20) }} isGreen>
              Registrar-se
            </RegisterButtonText>
          </RegisterButtonText>
        </RegisterButton>
      </ButtonWrapper>
    </Container>
  );
};
