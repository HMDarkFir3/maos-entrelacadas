import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabRoutes } from '@routes/Tab.routes';

import { StepOne } from '@screens/Donations/StepOne';
import { StepTwo } from '@screens/Donations/StepTwo';
import { EventDetails } from '@screens/EventDetails';
import { Settings } from '@screens/Settings';
import { UserInfo } from '@screens/UserInfo';
import { DonationHistory } from '@screens/DonationHistory';

const { Navigator, Group, Screen } = createNativeStackNavigator();

export const AppRoutes: FC = () => (
  <Navigator
    initialRouteName="TabRoutes"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="TabRoutes" component={TabRoutes} />

    {/* Donations */}
    <Group>
      <Screen name="Donations_StepOne" component={StepOne} />
      <Screen name="Donations_StepTwo" component={StepTwo} />
    </Group>

    <Screen name="EventDetails" component={EventDetails} />
    <Screen name="Settings" component={Settings} />
    <Screen name="UserInfo" component={UserInfo} />
    <Screen name="DonationHistory" component={DonationHistory} />
  </Navigator>
);
