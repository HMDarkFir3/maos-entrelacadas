import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabRoutes } from "@routes/Tab.routes";

import { Settings } from "@screens/Settings";
import { UserInfo } from "@screens/UserInfo";

const { Navigator, Screen } = createNativeStackNavigator();

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
      <Screen name="UserInfo" component={UserInfo} />
    </Navigator>
  );
};
