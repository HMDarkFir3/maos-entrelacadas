import { useState, FC } from "react";
import { useTheme } from "styled-components/native";
import { Moon, BellRinging } from "phosphor-react-native";

import { useAppSelector } from "@hooks/useAppSelector";
import { useSettings } from "@hooks/useSettings";

import { BackButton } from "@components/Buttons/BackButton";
import { Switcher } from "@components-of-screens/Settings/components/Switcher";
import { FontSwitcher } from "@components-of-screens/Settings/components/FontSwitcher";

import { Container, Header, Wrapper } from "./styles";

export const Settings: FC = () => {
  const { theme } = useAppSelector((store) => store.settings);
  const { toggleTheme, fontSizeValue } = useSettings();
  const { colors } = useTheme();

  const [notificationsSwitch, setNotificationsSwitch] = useState(false);

  const onToggleTheme = async () => toggleTheme();

  const onToggleNotifications = () => {
    setNotificationsSwitch((prevState) => !prevState);
  };

  return (
    <Container>
      <Header>
        <BackButton />
      </Header>

      <Wrapper>
        <Switcher
          icon={() => (
            <Moon
              size={fontSizeValue(24)}
              color={colors.screens.settings.components.switcher.icon}
              weight="bold"
            />
          )}
          title="Tema escuro"
          value={theme.title === "dark"}
          switchValue={theme.title === "dark"}
          onValueChange={onToggleTheme}
          onSwitchValue={onToggleTheme}
        />

        <Switcher
          icon={() => (
            <BellRinging
              size={fontSizeValue(24)}
              color={colors.screens.settings.components.switcher.icon}
              weight="bold"
            />
          )}
          title="Receber notificações"
          switchValue={notificationsSwitch}
          onSwitchValue={onToggleNotifications}
        />

        <FontSwitcher />
      </Wrapper>
    </Container>
  );
};
