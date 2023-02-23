import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Introduction } from "@screens/Introduction";
import { Welcome } from "@screens/Welcome";
import { Login } from "@screens/Authentication/Login";
import { Register } from "@screens/Authentication/Register";

import { useAuth } from "@hooks/useAuth";

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes: FC = () => {
  const { state: authState } = useAuth();

  return (
    <Navigator screenOptions={{ header: () => null }}>
      {!authState.sawIntroduction && (
        <Screen name="Introduction" component={Introduction} />
      )}
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
};
