import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabRoutes } from "@routes/tab.routes";

import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";
import { Settings } from "@screens/Settings";

const { Navigator, Screen, Group } = createNativeStackNavigator();

export const AppRoutes: FC = () => {
  return (
    <Navigator
      initialRouteName="TabRoutes"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="TabRoutes" component={TabRoutes} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
};
