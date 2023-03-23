import { FC } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import {
  Funnel,
  Gear,
  ClockCounterClockwise,
  Question,
  SignOut,
} from "phosphor-react-native";

import { useAuth } from "@hooks/useAuth";

import { Header } from "@components-of-screens/Profile/components/Header";
import { SettingsItem } from "@components-of-screens/Profile/components/SettingsItem";

import { Container, Wrapper, EventHeader, EventTitle, Footer } from "./styles";

export const Profile: FC = () => {
  const { logOut } = useAuth();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const onPressNavigate = (screenName: "Settings") => navigate(screenName);

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
        <Header />

        <EventHeader>
          <EventTitle>Eventos</EventTitle>

          <Funnel size={24} color={colors.screens.profile.icon} />
        </EventHeader>
      </Wrapper>

      <Footer>
        <SettingsItem
          icon={() => (
            <Gear
              size={24}
              color={colors.screens.profile.components.settingsItem.icon}
            />
          )}
          title="Configurações"
          onPress={() => onPressNavigate("Settings")}
        />

        <SettingsItem
          icon={() => (
            <ClockCounterClockwise
              size={24}
              color={colors.screens.profile.components.settingsItem.icon}
            />
          )}
          title="Histórico de Doações"
        />

        <SettingsItem
          icon={() => (
            <Question
              size={24}
              color={colors.screens.profile.components.settingsItem.icon}
            />
          )}
          title="Ajuda"
        />

        <SettingsItem
          icon={() => (
            <SignOut
              size={24}
              color={colors.screens.profile.components.settingsItem.icon}
            />
          )}
          title="Sair"
          onPress={onPressLogOut}
        />
      </Footer>
    </Container>
  );
};
