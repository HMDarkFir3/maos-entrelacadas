/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useCallback, FC, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

import { UserDTO } from '@dtos/UserDTO';

import { api } from '@services/api';

import { useAppDispatch } from '@hooks/useAppDispatch';

import { setUser, setIsLoading } from '@store/auth/actions';

import { COLLECTION_USER } from '@storages/index';

export interface AuthContextData {
  login: () => Promise<void>;
  register: () => Promise<void>;
  logOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const login = useCallback(async () => {
    try {
      dispatch(setIsLoading(true));

      const { data } = await api.post('/auth/login', {
        email: 'henrique@email.com',
        password: '123456',
      });

      console.log(data);

      dispatch(setUser(data));
      await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  }, [dispatch]);

  const register = async () => {
    try {
      dispatch(setIsLoading(true));

      const userInfo = {
        username: 'hrq_marques',
        password: '123456',
        email: 'henrique@email.com',
        cellphone: '13981630534',
        person: {
          name: 'Henrique Marques',
          birthDate: '2022-05-05',
          gender: {
            name: 'Assexual',
          },
        },
      };

      await api.post('users/create', { ...userInfo }).catch((err) => {
        console.log(err);
      });
    } catch (error) {
      console.log();
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const logOut = useCallback(async () => {
    try {
      await AsyncStorage.removeItem(COLLECTION_USER);
      await auth().signOut();
      dispatch(setUser(null));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    const getUserData = async () => {
      const storage = await AsyncStorage.getItem(COLLECTION_USER);

      if (storage) {
        const formattedUser: UserDTO = JSON.parse(storage);

        dispatch(setUser(formattedUser));
      }
    };

    getUserData();
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ login, register, logOut }}>{children}</AuthContext.Provider>
  );
};
