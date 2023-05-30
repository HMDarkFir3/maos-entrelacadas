import Constants from 'expo-constants';
import * as Google from 'expo-auth-session/providers/google';
import { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useSettings } from '@hooks/useSettings';

import { Button } from '@components/Buttons/Button';
import { OAuthButton } from '@components/Buttons/OAuthButton';

import LogoGoogle from '@assets/svg/logo_google.svg';
import LogoFacebook from '@assets/svg/logo_facebook.svg';

import {
  Container,
  Logo,
  TextWrapper,
  Title,
  Description,
  ButtonWrapper,
  RegisterButton,
  RegisterButtonText,
  SeparatorWrapper,
  Separator,
  SeparatorText,
  OAuthButtonWrapper,
} from './styles';

interface ConstantsEnv {
  googleClientId: string;
  googleClientSecret: string;
}

const { googleClientId, googleClientSecret } = Constants.expoConfig?.extra as ConstantsEnv;

export const Welcome: FC = () => {
  const { fontSizeValue } = useSettings();
  const { navigate } = useNavigation();

  const onPressLogin = (screenName: 'Login' | 'StepOne') => navigate(screenName);

  const [, response, promptAsync] = Google.useAuthRequest({
    clientId: googleClientId,
    clientSecret: googleClientSecret,
    redirectUri: 'https://auth.expo.io/@hmdarkfire/maosentrelacadas',
    responseType: 'code',
    scopes: ['profile', 'email'],
  });

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

        <SeparatorWrapper>
          <Separator />
          <SeparatorText>Ou</SeparatorText>
          <Separator />
        </SeparatorWrapper>

        <OAuthButtonWrapper>
          <OAuthButton icon={LogoGoogle} />
          <OAuthButton icon={LogoFacebook} />
        </OAuthButtonWrapper>
      </ButtonWrapper>
    </Container>
  );
};
