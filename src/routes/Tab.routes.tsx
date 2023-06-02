import { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Announcements } from '@screens/Announcements';
import { Events } from '@screens/Events';
import { Donations } from '@screens/Donations';
import { Profile } from '@screens/Profile';

import { CustomTabBar } from '@components/CustomTabBar';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes: FC = () => (
  <Navigator
    initialRouteName="Announcements"
    tabBar={({ state }) => <CustomTabBar state={state} />}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="Announcements" component={Announcements} />
    <Screen name="Events" component={Events} />
    <Screen name="Donations" component={Donations} />
    <Screen name="Profile" component={Profile} />
  </Navigator>
);
