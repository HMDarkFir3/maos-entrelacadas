import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { StripeProvider } from '@stripe/stripe-react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { queryClient } from '@services/queryClient';

import { store, persistor } from '@store/index';

import { SettingsProvider } from '@contexts/SettingsContext';

import { Routes } from '@routes/index.routes';

export const App: FC = () => {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) return null;

  SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SettingsProvider>
            <QueryClientProvider client={queryClient}>
              <StripeProvider publishableKey="pk_test_51NH8zyJI8OUd1JcmCGy1Swtryfp5tfd9n6QXMratfMs3eqjClBJG0OGvxBHLYSiqI89NO5h6JsvZyaTCzEWCR9Ep00VoTUOzxj">
                <GestureHandlerRootView style={{ flex: 1 }}>
                  <Routes />
                </GestureHandlerRootView>
              </StripeProvider>
            </QueryClientProvider>
          </SettingsProvider>
        </PersistGate>
      </ReduxProvider>
    </NavigationContainer>
  );
};
