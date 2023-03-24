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
import { useSettings } from "@hooks/useSettings";

import { Header } from "@components-of-screens/Profile/components/Header";
import { SettingsItem } from "@components-of-screens/Profile/components/SettingsItem";

import { Container, Wrapper, EventHeader, EventTitle, Footer } from "./styles";

export const Profile: FC = () => {
  const { logOut } = useAuth();
  const { fontSizeValue } = useSettings();
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
          <EventTitle style={{ fontSize: fontSizeValue(20) }}>
            Eventos
          </EventTitle>

          <Funnel
            size={fontSizeValue(24)}
            color={colors.screens.profile.icon}
          />
        </EventHeader>
      </Wrapper>

      <Footer>
        <SettingsItem
          icon={() => (
            <Gear
              size={fontSizeValue(24)}
              color={colors.screens.profile.components.settingsItem.icon}
            />
          )}
          title="Configurações"
          onPress={() => onPressNavigate("Settings")}
        />

        <SettingsItem
          icon={() => (
            <ClockCounterClockwise
              size={fontSizeValue(24)}
              color={colors.screens.profile.components.settingsItem.icon}
            />
          )}
          title="Histórico de Doações"
        />

        <SettingsItem
          icon={() => (
            <Question
              size={fontSizeValue(24)}
              color={colors.screens.profile.components.settingsItem.icon}
            />
          )}
          title="Ajuda"
        />

        <SettingsItem
          icon={() => (
            <SignOut
              size={fontSizeValue(24)}
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
