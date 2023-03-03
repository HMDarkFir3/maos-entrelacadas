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
import { format } from "date-fns";

import { UserDTO } from "@dtos/UserDTO";

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
      dispatch({ type: "SET_IS_LOADING", payload: true });

      const { user } = await auth().signInWithEmailAndPassword(
        state.email,
        state.password
      );

      await firestore()
        .collection("users")
        .doc(user?.uid)
        .get()
        .then(async (documentSnapshot) => {
          const formattedBirthdate = new Date(
            documentSnapshot.data()?.birthdate.seconds * 1000
          );

          const data = {
            uid: user?.uid,
            given_name: documentSnapshot.data()?.given_name,
            email: documentSnapshot.data()?.email,
            gender: documentSnapshot.data()?.gender,
            birthdate: formattedBirthdate,
          } as UserDTO;

          dispatch({ type: "SET_USER", payload: data });
          await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(data));
        });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: "SET_IS_LOADING", payload: false });
    }
  };

  const register = async () => {
    try {
      dispatch({ type: "SET_IS_LOADING", payload: true });

      const { user } = await auth().createUserWithEmailAndPassword(
        state.email,
        state.password
      );

      await firestore()
        .collection("users")
        .doc(user?.uid)
        .set({
          given_name: state.givenName,
          email: state.email,
          gender: state.gender,
          birthdate: state.birthdate,
        })
        .then(async () => {
          const data = {
            uid: user.uid,
            given_name: state.givenName,
            email: state.email,
            gender: state.gender,
            birthdate: state.birthdate,
          } as UserDTO;

          dispatch({ type: "SET_USER", payload: data });
          await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(data));
        });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: "SET_IS_LOADING", payload: false });
    }
  };

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem(COLLECTION_USER);
      await auth().signOut();
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
