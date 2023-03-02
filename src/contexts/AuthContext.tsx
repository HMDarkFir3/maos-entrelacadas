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
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

import {
  authReducer,
  initialState,
  AuthState,
  AuthAction,
} from "@reducers/authReducer";

import { COLLECTION_INTRODUCTION, COLLECTION_USER } from "@storages/index";

export interface AuthContextData {
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
  login: () => Promise<void>;
  register: () => Promise<void>;
  logOut: () => Promise<void>;
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

  const getUserData = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_USER);

    if (storage) {
      dispatch({ type: "SET_USER", payload: JSON.parse(storage) });
    }
  };

  const login = async () => {
    try {
      console.log(state.email, state.password);

      const { user } = await auth().signInWithEmailAndPassword(
        state.email,
        state.password
      );

      const { data } = await firestore()
        .collection("users")
        .doc(user?.uid)
        .get();

      console.log(data());
    } catch (error) {
      console.log(error);
    }
  };

  const register = async () => {
    try {
      const { user } = await auth().createUserWithEmailAndPassword(
        state.email,
        state.password
      );

      await firestore().collection("users").doc(user?.uid).set({
        given_name: state.givenName,
        email: state.email,
        gender: state.gender,
        birthdate: state.birthdate,
      });

      const data = {
        given_name: state.givenName,
        email: state.email,
        gender: state.gender,
        birthdate: state.birthdate,
      };

      dispatch({ type: "SET_USER", payload: data });

      await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = async () => {
    try {
      await auth().signOut();
      await AsyncStorage.removeItem(COLLECTION_USER);
      dispatch({ type: "SET_USER", payload: null });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSawIntroductionInStorage();
  }, []);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch, login, register, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
