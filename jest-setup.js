import 'react-native-gesture-handler/jestSetup';

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => {
  return {
    useFocusEffect: jest.fn(),
    useNavigation: () => {
      return {
        navigate: jest.fn(),
        goBack: jest.fn(),
      };
    },
    useRoute: () => {
      return {
        params: {},
      };
    },
  };
});

jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: jest.fn(() => {
      return {
        Navigator: jest.fn(),
        Screen: jest.fn(),
        Group: jest.fn(),
      };
    }),
  };
});

jest.mock('@react-navigation/bottom-tabs', () => {
  return {
    createBottomTabNavigator: jest.fn(() => {
      return {
        Navigator: jest.fn(),
        Screen: jest.fn(),
      };
    }),
  };
});

jest.mock('expo-navigation-bar', () => {
  return {
    NavigationBar: jest.fn(() => {
      return {
        setBackgroundColorAsync: jest.fn(),
        setButtonStyleAsync: jest.fn(),
      };
    }),
  };
});

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest.fn().mockImplementation((config, reducers) => reducers),
  };
});
