import {
  createContext,
  useEffect,
  useReducer,
  FC,
  Dispatch,
  ReactNode,
  Reducer,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  authReducer,
  initialState,
  AuthState,
  AuthAction,
} from "@reducers/authReducer";

import { COLLECTION_INTRODUCTION } from "@storages/index";

export interface AuthContextData {
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<AuthState, AuthAction>>(
    authReducer,
    initialState
  );

  const getSawIntroductionInStorage = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_INTRODUCTION);

    if (storage) {
      dispatch({ type: "SET_SAW_INTRODUCTION", payload: JSON.parse(storage) });
    }
  };

  useEffect(() => {
    getSawIntroductionInStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
