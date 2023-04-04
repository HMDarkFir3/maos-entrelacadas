import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { store } from '@store/index';

import { AuthProvider } from '@contexts/AuthContext';
import { SettingsProvider } from '@contexts/SettingsContext';

import { Routes } from '@routes/index.routes';

export const App: FC = () => {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <AuthProvider>
          <SettingsProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <Routes />
            </GestureHandlerRootView>
          </SettingsProvider>
        </AuthProvider>
      </ReduxProvider>
    </NavigationContainer>
  );
};
