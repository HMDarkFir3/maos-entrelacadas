import { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";

import { CustomTabBar } from "@components/CustomTabBar";

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes: FC = () => {
  return (
    <Navigator
      initialRouteName="Home"
      tabBar={() => <CustomTabBar />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Events" component={Home} />
      <Screen name="Donations" component={Home} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};
