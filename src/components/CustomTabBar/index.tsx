import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import { House, MapPinLine, Gift, User } from "phosphor-react-native";

import { useTabBar } from "@hooks/useTabBar";

import { Container, TabItem, TabItemText } from "./styles";

interface Props extends BottomTabBarProps {}

export const CustomTabBar: FC<Props> = () => {
  const { state: tabBarState, dispatch: tabBarDispatch } = useTabBar();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const onPressNavigate = (
    screenName: "Home" | "Events" | "Donations" | "Profile"
  ) => {
    navigate(screenName);
    tabBarDispatch({ type: "SET_IS_ACTIVE", payload: screenName });
  };

  return (
    <Container>
      <TabItem activeOpacity={0.7} onPress={() => onPressNavigate("Home")}>
        <House
          size={28}
          color={
            tabBarState.isActive === "Home"
              ? colors.components.customTabBar.active
              : colors.components.customTabBar.inactive
          }
        />
        <TabItemText isActive={tabBarState.isActive === "Home"}>
          Início
        </TabItemText>
      </TabItem>

      <TabItem activeOpacity={0.7} onPress={() => onPressNavigate("Events")}>
        <MapPinLine
          size={28}
          color={
            tabBarState.isActive === "Events"
              ? colors.components.customTabBar.active
              : colors.components.customTabBar.inactive
          }
        />
        <TabItemText isActive={tabBarState.isActive === "Events"}>
          Eventos
        </TabItemText>
      </TabItem>

      <TabItem activeOpacity={0.7} onPress={() => onPressNavigate("Donations")}>
        <Gift
          size={28}
          color={
            tabBarState.isActive === "Donations"
              ? colors.components.customTabBar.active
              : colors.components.customTabBar.inactive
          }
        />
        <TabItemText isActive={tabBarState.isActive === "Donations"}>
          Doações
        </TabItemText>
      </TabItem>

      <TabItem activeOpacity={0.7} onPress={() => onPressNavigate("Profile")}>
        <User
          size={28}
          color={
            tabBarState.isActive === "Profile"
              ? colors.components.customTabBar.active
              : colors.components.customTabBar.inactive
          }
        />
        <TabItemText isActive={tabBarState.isActive === "Profile"}>
          Perfil
        </TabItemText>
      </TabItem>
    </Container>
  );
};
