import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "@hooks/useAuth";

import { AuthRoutes } from "@routes/auth.routes";
import { AppRoutes } from "@routes/app.routes";

export const Routes: FC = () => {
  const { state: authState } = useAuth();

  return (
    <NavigationContainer>
      {authState.user?.uid ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
