import { FC } from "react";
import { useTheme } from "styled-components/native";
import { Funnel } from "phosphor-react-native";

import { Header } from "@components-of-screens/Profile/components/Header";

import { Container, EventHeader, EventTitle } from "./styles";

export const Profile: FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <Header />

      <EventHeader>
        <EventTitle>Eventos</EventTitle>

        <Funnel size={24} color={colors.screens.profile.icon} />
      </EventHeader>
    </Container>
  );
};
