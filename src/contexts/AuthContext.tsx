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

import { UserDTO } from "@dtos/UserDTO";

import { useAppDispatch } from "@hooks/useAppDispatch";

import { setUser, setIsLoading } from "@store/auth/actions";
import { setIsActive } from "@store/tabBar/actions";

import { COLLECTION_USER } from "@storages/index";

export interface AuthContextData {
  login: (email: string, password: string) => Promise<void>;
  register: (
    givenName: string,
    email: string,
    gender: string,
    birthdate: Date | null,
    password: string
  ) => Promise<void>;
  logOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const getUserData = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_USER);

    if (storage) {
      const formattedUser: UserDTO = JSON.parse(storage);

      dispatch(setUser(formattedUser));
    }
  };

  const login = async (email: string, password: string) => {
    try {
      dispatch(setIsLoading(true));

      const { user } = await auth().signInWithEmailAndPassword(email, password);

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
            birthdate: formattedBirthdate.toISOString(),
          } as UserDTO;

          dispatch(setUser(data));
          await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(data));
        });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const register = async (
    givenName: string,
    email: string,
    gender: string,
    birthdate: Date | null,
    password: string
  ) => {
    try {
      dispatch(setIsLoading(true));

      const { user } = await auth().createUserWithEmailAndPassword(
        email,
        password
      );

      await firestore()
        .collection("users")
        .doc(user?.uid)
        .set({
          given_name: givenName,
          email,
          gender,
          birthdate,
        })
        .then(async () => {
          const data = {
            uid: user.uid,
            given_name: givenName,
            email,
            gender,
            birthdate: birthdate?.toISOString(),
          } as UserDTO;

          dispatch(setUser(data));
          await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(data));
        });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem(COLLECTION_USER);
      await auth().signOut();
      dispatch(setIsActive("Home"));
      dispatch(setUser(null));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ login, register, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
