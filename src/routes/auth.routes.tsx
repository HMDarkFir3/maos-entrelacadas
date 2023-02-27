import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Introduction } from "@screens/Introduction";
import { Welcome } from "@screens/Welcome";
import { Login } from "@screens/Authentication/Login";
import { StepOne } from "@screens/Authentication/Register/StepOne";
import { StepTwo } from "@screens/Authentication/Register/StepTwo";
import { StepThree } from "@screens/Authentication/Register/StepThree";

import { useAuth } from "@hooks/useAuth";

const { Navigator, Group, Screen } = createNativeStackNavigator();

export const AuthRoutes: FC = () => {
  const { state: authState } = useAuth();

  return (
    <Navigator screenOptions={{ header: () => null }}>
      {!authState.sawIntroduction && (
        <Screen name="Introduction" component={Introduction} />
      )}
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Login" component={Login} />

      <Group>
        <Screen name="StepOne" component={StepOne} />
        <Screen name="StepTwo" component={StepTwo} />
        <Screen name="StepThree" component={StepThree} />
      </Group>
    </Navigator>
  );
};
