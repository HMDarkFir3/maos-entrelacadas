import { useState, FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import { House, MapPinLine, Gift, User } from "phosphor-react-native";

import { Container, TabItem, TabItemText } from "./styles";

interface Props extends BottomTabBarProps {}

export const CustomTabBar: FC<Props> = () => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const [isActive, setIsActive] = useState<
    "Home" | "Events" | "Donations" | "Profile"
  >("Home");

  const onPressNavigate = (
    screenName: "Home" | "Events" | "Donations" | "Profile"
  ) => {
    navigate(screenName);
    setIsActive(screenName);
  };

  return (
    <Container>
      <TabItem activeOpacity={0.7} onPress={() => onPressNavigate("Home")}>
        <House
          size={28}
          color={
            isActive === "Home"
              ? colors.components.customTabBar.active
              : colors.components.customTabBar.inactive
          }
        />
        <TabItemText isActive={isActive === "Home"}>Início</TabItemText>
      </TabItem>

      <TabItem activeOpacity={0.7} onPress={() => onPressNavigate("Events")}>
        <MapPinLine
          size={28}
          color={
            isActive === "Events"
              ? colors.components.customTabBar.active
              : colors.components.customTabBar.inactive
          }
        />
        <TabItemText isActive={isActive === "Events"}>Eventos</TabItemText>
      </TabItem>

      <TabItem activeOpacity={0.7} onPress={() => onPressNavigate("Donations")}>
        <Gift
          size={28}
          color={
            isActive === "Donations"
              ? colors.components.customTabBar.active
              : colors.components.customTabBar.inactive
          }
        />
        <TabItemText isActive={isActive === "Donations"}>Doações</TabItemText>
      </TabItem>

      <TabItem activeOpacity={0.7} onPress={() => onPressNavigate("Profile")}>
        <User
          size={28}
          color={
            isActive === "Profile"
              ? colors.components.customTabBar.active
              : colors.components.customTabBar.inactive
          }
        />
        <TabItemText isActive={isActive === "Profile"}>Perfil</TabItemText>
      </TabItem>
    </Container>
  );
};
