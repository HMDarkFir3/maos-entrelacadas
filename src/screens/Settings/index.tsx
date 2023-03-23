import * as NavigationBar from "expo-navigation-bar";
import { useState, useCallback, FC } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Moon, BellRinging } from "phosphor-react-native";

import { BackButton } from "@components/Buttons/BackButton";
import { Switcher } from "@components-of-screens/Settings/components/Switcher";

import { useSettings } from "@hooks/useSettings";

import { Container, Header, Wrapper } from "./styles";

export const Settings: FC = () => {
  const { theme, toggleTheme } = useSettings();
  const { colors } = useTheme();

  const [notificationsSwitch, setNotificationsSwitch] = useState(false);

  const onToggleTheme = () => {
    toggleTheme();
  };

  const onToggleNotifications = () => {
    setNotificationsSwitch((prevState) => !prevState);
  };

  useFocusEffect(
    useCallback(() => {
      NavigationBar.setBackgroundColorAsync(
        colors.navigationBar.backgroundPrimary
      );
      NavigationBar.setButtonStyleAsync("light");
    }, [])
  );

  return (
    <Container>
      <Header>
        <BackButton />
      </Header>

      <Wrapper>
        <Switcher
          icon={() => (
            <Moon
              size={24}
              color={colors.screens.settings.components.switcher.icon}
              weight="bold"
            />
          )}
          title="Tema escuro"
          switchValue={theme.title === "dark"}
          onSwitchValue={onToggleTheme}
        />

        <Switcher
          icon={() => (
            <BellRinging
              size={24}
              color={colors.screens.settings.components.switcher.icon}
              weight="bold"
            />
          )}
          title="Receber notificações"
          switchValue={notificationsSwitch}
          onSwitchValue={onToggleNotifications}
        />
      </Wrapper>
    </Container>
  );
};
