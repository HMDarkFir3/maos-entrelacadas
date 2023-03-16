import { FC } from "react";
import { GestureDetector } from "react-native-gesture-handler";
import { useTheme } from "styled-components/native";
import {
  Funnel,
  Gear,
  ClockCounterClockwise,
  Question,
  SignOut,
} from "phosphor-react-native";

import { Header } from "@components-of-screens/Profile/components/Header";
import { SettingsItem } from "@components-of-screens/Profile/components/SettingsItem";

import { Container, Wrapper, EventHeader, EventTitle, Footer } from "./styles";

export const Profile: FC = () => {
  const { colors } = useTheme();

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
          onPress={() => alert("Configurações")}
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
        />
      </Footer>
    </Container>
  );
};
