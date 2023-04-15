import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { FC } from 'react';
import { Text } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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

  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <PersistGate loading={<Text>...Loading</Text>} persistor={persistor}>
          <SettingsProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <Routes />
            </GestureHandlerRootView>
          </SettingsProvider>
        </PersistGate>
      </ReduxProvider>
    </NavigationContainer>
  );
};
