import { UserDTO } from '@dtos/UserDTO';
import { UpdateDTO } from '@dtos/UpdateDTO';

export interface InitialStateAuth {
  user: UserDTO['user'] | null;
  accessToken: string | null;
  isSigned: boolean;
  isEditable: boolean;
  isLoading: boolean;
  isEmptyData: boolean;
}

export interface LoginFormState {
  email: string;
  password: string;
}

export interface StepOneFormState {
  givenName?: string;
  username?: string;
  email?: string;
  cellphone?: string;
}

export interface StepTwoFormState {
  gender?: string;
  birthdate?: string;
  password?: string;
  confirmPassword?: string;
}

export interface RegisterFormState extends StepOneFormState, StepTwoFormState {
  image?: string;
}

export interface UpdateFormState {
  data: UpdateDTO.Request;
  id: string | undefined;
}
