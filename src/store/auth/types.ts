import { UserDTO } from '@dtos/UserDTO';

export interface InitialStateData {
  user: UserDTO['user'] | null;
  accessToken: string | null;
  isSigned: boolean;
  isLoading: boolean;
}

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
