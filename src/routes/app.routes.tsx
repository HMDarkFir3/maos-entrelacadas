import { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home";

import { CustomTabBar } from "@components/CustomTabBar";

const { Navigator, Screen } = createBottomTabNavigator();

export const AppRoutes: FC = () => {
  return (
    <Navigator
      initialRouteName="Home"
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} options={{ title: "Início" }} />
      <Screen name="Events" component={Home} options={{ title: "Evento" }} />
      <Screen name="Donations" component={Home} options={{ title: "Doacao" }} />
      <Screen name="Profile" component={Home} options={{ title: "Perfil" }} />
    </Navigator>
  );
};
