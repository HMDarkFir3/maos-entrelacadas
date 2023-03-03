import { FC } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { SignOut } from "phosphor-react-native";

import { useAuth } from "@hooks/useAuth";
import { useTabBar } from "@hooks/useTabBar";

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
        <ProfileButton activeOpacity={0.7} onPress={onPressProfile}>
          <UserImage
            source={{ uri: "https://www.github.com/hmdarkfir3.png" }}
          />
        </ProfileButton>
        <UserInfo>
          <Greeting>Olá,</Greeting>
          <Username>{formattedGivenName}</Username>
        </UserInfo>
      </Wrapper>

      <SignOutButton activeOpacity={0.7} onPress={onPressLogOut}>
        <SignOut size={24} color={colors.screens.home.components.header.icon} />
      </SignOutButton>
    </Container>
  );
};
