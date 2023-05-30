import { FC } from 'react';
import { Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { useTheme } from 'styled-components/native';
import { Funnel, Gear, ClockCounterClockwise, Question, SignOut } from 'phosphor-react-native';

import { getUserEvents } from '@services/GET/getUserEvents';

import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useSettings } from '@hooks/useSettings';

import { logout } from '@store/auth/actions';

import { Header } from '@components-of-screens/Profile/components/Header';
import { UserEventCard } from '@components-of-screens/Profile/components/UserEventCard';
import { SettingsItem } from '@components-of-screens/Profile/components/SettingsItem';
import { Loading } from '@components/Loading';

import { Container, Wrapper, EventHeader, EventTitle, Footer } from './styles';

export const Profile: FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { fontSizeValue } = useSettings();
  const { navigate } = useNavigation();
  const { data, isLoading } = useQuery({
    queryKey: ['userEvents', user?.id],
    queryFn: () => getUserEvents(user?.id!),
  });
  const { colors } = useTheme();

  const onPressNavigate = (screenName: 'Settings' | 'DonationHistory') => navigate(screenName);

  const onPressLogOut = () => {
    Alert.alert(
      'Sair',
      'Deseja sair da aplicação?',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => dispatch(logout()),
        },
      ],
      { cancelable: true }
    );
  };

  const onPressEvent = (eventId: string) => navigate('EventDetails', { id: eventId });

  return (
    <Container>
      <Wrapper>
        <Header />

        <EventHeader>
          <EventTitle style={{ fontSize: fontSizeValue(20) }}>Eventos</EventTitle>

          <Funnel size={fontSizeValue(24)} color={colors.icon600} />
        </EventHeader>

        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            style={{ marginTop: 20 }}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <UserEventCard data={item} onPress={() => onPressEvent(item.id)} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </Wrapper>

      <Footer>
        <SettingsItem
          testID="Profile.Settings"
          icon={() => <Gear size={fontSizeValue(24)} color={colors.icon900} />}
          title="Configurações"
          onPress={() => onPressNavigate('Settings')}
        />

        <SettingsItem
          icon={() => <ClockCounterClockwise size={fontSizeValue(24)} color={colors.icon900} />}
          title="Histórico de Doações"
          onPress={() => onPressNavigate('DonationHistory')}
        />

        <SettingsItem
          icon={() => <Question size={fontSizeValue(24)} color={colors.icon900} />}
          title="Ajuda"
        />

        <SettingsItem
          testID="Profile.LogOut"
          icon={() => <SignOut size={fontSizeValue(24)} color={colors.icon900} />}
          title="Sair"
          onPress={onPressLogOut}
        />
      </Footer>
    </Container>
  );
};
