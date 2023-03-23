import "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";
import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "@contexts/AuthContext";
import { TabBarProvider } from "@contexts/TabBarContext";
import { SettingsProvider } from "@contexts/SettingsContext";

import { Routes } from "@routes/index";

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
      <AuthProvider>
        <TabBarProvider>
          <SettingsProvider>
            <Routes />
          </SettingsProvider>
        </TabBarProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};
