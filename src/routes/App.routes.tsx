import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabRoutes } from '@routes/Tab.routes';

import { Donations } from '@screens/Donations';
import { EventDetails } from '@screens/EventDetails';
import { Settings } from '@screens/Settings';
import { UserInfo } from '@screens/UserInfo';
import { DonationHistory } from '@screens/DonationHistory';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes: FC = () => (
  <Navigator
    initialRouteName="TabRoutes"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="TabRoutes" component={TabRoutes} />
    <Screen name="Donations" component={Donations} />
    <Screen name="EventDetails" component={EventDetails} />
    <Screen name="Settings" component={Settings} />
    <Screen name="UserInfo" component={UserInfo} />
    <Screen name="DonationHistory" component={DonationHistory} />
  </Navigator>
);
