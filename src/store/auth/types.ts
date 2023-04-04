import { UserDTO } from '@dtos/UserDTO';

export interface InitialStateData {
  givenName: string;
  email: string;
  gender: string;
  birthdate: string | null;
  password: string;
  confirmPassword: string;
  isSigned: boolean;
  isLoading: boolean;
  user: UserDTO | null;
}
