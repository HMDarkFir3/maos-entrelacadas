import { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';
import { House, MapPinLine, Gift, User } from 'phosphor-react-native';

import { useSettings } from '@hooks/useSettings';

import { Container, TabItem, TabItemText } from './styles';

interface Props {
  state: BottomTabBarProps['state'];
}

export const CustomTabBar: FC<Props> = (props) => {
  const { state } = props;

  const { fontSizeValue } = useSettings();
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const onPressNavigate = (
    screenName: 'Announcements' | 'Events' | 'Donations_StepOne' | 'Profile'
  ) => navigate(screenName);

  const isActiveRoute = state.routeNames[state.index];

  const getColors = (isActive: boolean) => (isActive ? colors.primary600 : colors.text600);

  return (
    <Container>
      <TabItem testID="CustomTabBar.TabItem1" onPress={() => onPressNavigate('Announcements')}>
        <House size={fontSizeValue(28)} color={getColors(isActiveRoute === 'Announcements')} />

        <TabItemText
          style={{ fontSize: fontSizeValue(12) }}
          isActive={isActiveRoute === 'Announcements'}
        >
          Início
        </TabItemText>
      </TabItem>

      <TabItem testID="CustomTabBar.TabItem2" onPress={() => onPressNavigate('Events')}>
        <MapPinLine size={fontSizeValue(28)} color={getColors(isActiveRoute === 'Events')} />

        <TabItemText style={{ fontSize: fontSizeValue(12) }} isActive={isActiveRoute === 'Events'}>
          Eventos
        </TabItemText>
      </TabItem>

      <TabItem testID="CustomTabBar.TabItem3" onPress={() => onPressNavigate('Donations_StepOne')}>
        <Gift size={fontSizeValue(28)} color={getColors(isActiveRoute === 'Donations_StepOne')} />

        <TabItemText
          style={{ fontSize: fontSizeValue(12) }}
          isActive={isActiveRoute === 'Donations_StepOne'}
        >
          Doações
        </TabItemText>
      </TabItem>

      <TabItem testID="CustomTabBar.TabItem4" onPress={() => onPressNavigate('Profile')}>
        <User size={fontSizeValue(28)} color={getColors(isActiveRoute === 'Profile')} />

        <TabItemText style={{ fontSize: fontSizeValue(12) }} isActive={isActiveRoute === 'Profile'}>
          Perfil
        </TabItemText>
      </TabItem>
    </Container>
  );
};
