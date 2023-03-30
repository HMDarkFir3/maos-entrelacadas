import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { House, MapPinLine, Gift, User } from "phosphor-react-native";

import { useTabBar } from "@hooks/useTabBar";
import { useSettings } from "@hooks/useSettings";

import { Container, TabItem, TabItemText } from "./styles";

export const CustomTabBar: FC = () => {
  const { state: tabBarState, dispatch: tabBarDispatch } = useTabBar();
  const { fontSizeValue } = useSettings();
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
      <TabItem
        testID="CustomTabBar.TabItem1"
        onPress={() => onPressNavigate("Home")}
      >
        <House
          size={fontSizeValue(28)}
          color={
            tabBarState.isActive === "Home"
              ? colors.components.customTabBar.active
              : colors.components.customTabBar.inactive
          }
        />
        <TabItemText
          style={{ fontSize: fontSizeValue(12) }}
          isActive={tabBarState.isActive === "Home"}
        >
          Início
        </TabItemText>
      </TabItem>

      <TabItem
        testID="CustomTabBar.TabItem2"
        onPress={() => onPressNavigate("Events")}
      >
        <MapPinLine
          size={fontSizeValue(28)}
          color={
            tabBarState.isActive === "Events"
              ? colors.components.customTabBar.active
              : colors.components.customTabBar.inactive
          }
        />
        <TabItemText
          style={{ fontSize: fontSizeValue(12) }}
          isActive={tabBarState.isActive === "Events"}
        >
          Eventos
        </TabItemText>
      </TabItem>

      <TabItem
        testID="CustomTabBar.TabItem3"
        onPress={() => onPressNavigate("Donations")}
      >
        <Gift
          size={fontSizeValue(28)}
          color={
            tabBarState.isActive === "Donations"
              ? colors.components.customTabBar.active
              : colors.components.customTabBar.inactive
          }
        />
        <TabItemText
          style={{ fontSize: fontSizeValue(12) }}
          isActive={tabBarState.isActive === "Donations"}
        >
          Doações
        </TabItemText>
      </TabItem>

      <TabItem
        testID="CustomTabBar.TabItem4"
        onPress={() => onPressNavigate("Profile")}
      >
        <User
          size={fontSizeValue(28)}
          color={
            tabBarState.isActive === "Profile"
              ? colors.components.customTabBar.active
              : colors.components.customTabBar.inactive
          }
        />
        <TabItemText
          style={{ fontSize: fontSizeValue(12) }}
          isActive={tabBarState.isActive === "Profile"}
        >
          Perfil
        </TabItemText>
      </TabItem>
    </Container>
  );
};
