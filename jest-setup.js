import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";
import { light } from "@themes/light";

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => {
      return {
        navigate: jest.fn(),
        goBack: jest.fn(),
      };
    },
  };
});

// jest.mock("styled-components/native", () => {
//   return {
//     useTheme: () => {
//       return {
//         title: "light",
//         colors: {},
//         fonts: {
//           regular: "Roboto_400Regular",
//           medium: "Roboto_500Medium",
//           bold: "Roboto_700Bold",
//         },
//       };
//     },
//   };
// });
