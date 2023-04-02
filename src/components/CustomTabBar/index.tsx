import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import { House, MapPinLine, Gift, User } from "phosphor-react-native";

import { useSettings } from "@hooks/useSettings";

import { Container, TabItem, TabItemText } from "./styles";

interface Props extends BottomTabBarProps {}

export const CustomTabBar: FC<Props> = (props) => {
  const { state } = props;

  const { fontSizeValue } = useSettings();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const onPressNavigate = (
    screenName: "Home" | "Events" | "Donations" | "Profile"
  ) => navigate(screenName);

  const isActive = state.routeNames[state.index];

  const getColors = (isActive: boolean) => {
    if (isActive) {
      return colors.components.customTabBar.active;
    } else {
      return colors.components.customTabBar.inactive;
    }
  };

  return (
    <Container>
      <TabItem
        testID="CustomTabBar.TabItem1"
        onPress={() => onPressNavigate("Home")}
      >
        <House
          size={fontSizeValue(28)}
          color={getColors(isActive === "Home")}
        />
        <TabItemText
          style={{ fontSize: fontSizeValue(12) }}
          isActive={isActive === "Home"}
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
          color={getColors(isActive === "Events")}
        />
        <TabItemText
          style={{ fontSize: fontSizeValue(12) }}
          isActive={isActive === "Events"}
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
          color={getColors(isActive === "Donations")}
        />
        <TabItemText
          style={{ fontSize: fontSizeValue(12) }}
          isActive={isActive === "Donations"}
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
          color={getColors(isActive === "Profile")}
        />
        <TabItemText
          style={{ fontSize: fontSizeValue(12) }}
          isActive={isActive === "Profile"}
        >
          Perfil
        </TabItemText>
      </TabItem>
    </Container>
  );
};
