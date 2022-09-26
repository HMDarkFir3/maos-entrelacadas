import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "@routes/auth.routes";

export const Routes: FC = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};
