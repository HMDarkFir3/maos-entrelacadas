import { createContext, useEffect, FC, ReactNode } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LoginDTO } from '@dtos/LoginDTO';
import { UserDTO } from '@dtos/UserDTO';

import { api } from '@services/api';

import { useAppDispatch } from '@hooks/useAppDispatch';

import { setUser, setIsLoading } from '@store/auth/actions';

import { COLLECTION_USER } from '@storages/index';

export interface LoginFormState {
  email: string;
  password: string;
}

export interface StepOneFormState {
  givenName: string;
  username: string;
  email: string;
  cellphone: string;
}

export interface StepTwoFormState {
  gender: string;
  birthdate: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterFormState extends StepOneFormState, StepTwoFormState {}

export interface AuthContextData {
  login: (form: LoginFormState) => Promise<void>;
  register: (form: RegisterFormState) => Promise<void>;
  logOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const login = async (form: LoginFormState) => {
    try {
      dispatch(setIsLoading(true));

      const { data } = await api.post<LoginDTO.Response>('/auth/login', {
        email: form.email,
        password: form.password,
      } as LoginDTO.Request);

      await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(data));

      dispatch(setUser(data));
    } catch (error) {
      const errors = {
        401: 'Não autorizado',
        500: 'Erro interno do servidor',
      } as any;

      if (error) {
        Alert.alert('Ocorreu um error no sistema', errors[error.response.data.statusCode]);
      }

      // dispatch(setError(errors[error.response.data.statusCode]));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const register = async (form: RegisterFormState) => {
    try {
      dispatch(setIsLoading(true));

      const userInfo = {
        username: form.username,
        password: form.password,
        email: form.email,
        cellphone: form.cellphone,
        person: {
          name: form.givenName,
          birthdate: form.birthdate,
          gender: {
            name: form.gender,
          },
        },
      };

      await api.post('users/create', { ...userInfo });
    } catch (error) {
      if (error) {
        console.log(error.response.data.message);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem(COLLECTION_USER);
      dispatch(setUser(null));
    } catch (error) {
      console.log(error);
    }
  };

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
    /* eslint-disable react/jsx-no-constructed-context-values */
    <AuthContext.Provider value={{ login, register, logOut }}>{children}</AuthContext.Provider>
  );
};
