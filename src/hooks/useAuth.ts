import { useContext } from "react";

import { AuthContext, AuthContextData } from "@contexts/AuthContext";

export const useAuth = (): AuthContextData => {
  const content = useContext(AuthContext);

  return content;
};
