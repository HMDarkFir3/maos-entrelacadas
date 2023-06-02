import Constants from 'expo-constants';
import * as Google from 'expo-auth-session/providers/google';
import { useEffect, FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { api } from '@services/api';

import { GoogleDTO } from '@dtos/GoogleDTO';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useSettings } from '@hooks/useSettings';

import { register } from '@store/auth/thunks/register';

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
  const dispatch = useAppDispatch();
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

  const getUserInfo = async (token: string) => {
    const { data: googleResponse } = await axios.get<GoogleDTO.Response>(
      'https://www.googleapis.com/userinfo/v2/me',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (googleResponse.id) {
      const { data } = await api.post(`/auth/google/login/${googleResponse.id}`);

      if (data.message === 'User not found') {
        const userInfo = {
          username: googleResponse.name,
          password: googleResponse.id,
          email: googleResponse.email,
          image: googleResponse.picture,
          givenName: googleResponse.given_name,
        };

        dispatch(register(userInfo));
      }
    }
  };

  useEffect(() => {
    if (response?.type === 'success') {
      getUserInfo(response.authentication?.accessToken as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response?.type]);

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
          <OAuthButton icon={LogoGoogle} onPress={() => promptAsync()} />
          <OAuthButton icon={LogoFacebook} />
        </OAuthButtonWrapper>
      </ButtonWrapper>
    </Container>
  );
};
