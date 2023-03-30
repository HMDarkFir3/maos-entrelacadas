import { FC } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { SignOut } from "phosphor-react-native";

import { useAuth } from "@hooks/useAuth";
import { useTabBar } from "@hooks/useTabBar";
import { useSettings } from "@hooks/useSettings";

import {
  Container,
  Wrapper,
  ProfileButton,
  UserImage,
  UserInfo,
  Greeting,
  Username,
  SignOutButton,
} from "./styles";

export const Header: FC = () => {
  const { state: authState, logOut } = useAuth();
  const { dispatch: tabBarDispatch } = useTabBar();
  const { fontSizeValue } = useSettings();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const formattedGivenName: string | undefined =
    authState.user?.given_name.split(" ")[0];

  const onPressProfile = () => {
    navigate("Profile");
    tabBarDispatch({ type: "SET_IS_ACTIVE", payload: "Profile" });
  };

  const onPressLogOut = () => {
    Alert.alert(
      "Sair",
      "Deseja sair da aplicação?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => logOut(),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <Container>
      <Wrapper>
        <ProfileButton
          testID="Header.ProfileButton"
          android_ripple={{
            color: colors.androidRipple.backgroundPrimary,
            radius: 32,
            borderless: true,
          }}
          onPress={onPressProfile}
        >
          <UserImage
            source={{ uri: "https://www.github.com/hmdarkfir3.png" }}
          />
        </ProfileButton>
        <UserInfo>
          <Greeting style={{ fontSize: fontSizeValue(20) }}>Olá,</Greeting>
          <Username style={{ fontSize: fontSizeValue(20) }}>
            {formattedGivenName}
          </Username>
        </UserInfo>
      </Wrapper>

      <SignOutButton
        testID="Header.SignOutButton"
        android_ripple={{
          color: colors.androidRipple.backgroundPrimary,
          radius: 20,
          borderless: true,
        }}
        onPress={onPressLogOut}
      >
        <SignOut
          size={fontSizeValue(24)}
          color={colors.screens.home.components.header.icon}
        />
      </SignOutButton>
    </Container>
  );
};
