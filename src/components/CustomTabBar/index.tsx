import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { House, MapPinLine, Gift, User } from "phosphor-react-native";

import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { useSettings } from "@hooks/useSettings";

import { setIsActive } from "@store/tabBar/actions";

import { Container, TabItem, TabItemText } from "./styles";

export const CustomTabBar: FC = () => {
  const dispatch = useAppDispatch();
  const { isActive } = useAppSelector((store) => store.tabBar);
  const { fontSizeValue } = useSettings();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const onPressNavigate = (
    screenName: "Home" | "Events" | "Donations" | "Profile"
  ) => {
    navigate(screenName);
    dispatch(setIsActive(screenName));
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
            isActive === "Home"
              ? colors.components.customTabBar.active
              : colors.components.customTabBar.inactive
          }
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
          color={
            isActive === "Events"
              ? colors.components.customTabBar.active
              : colors.components.customTabBar.inactive
          }
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
          color={
            isActive === "Donations"
              ? colors.components.customTabBar.active
              : colors.components.customTabBar.inactive
          }
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
          color={
            isActive === "Profile"
              ? colors.components.customTabBar.active
              : colors.components.customTabBar.inactive
          }
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
