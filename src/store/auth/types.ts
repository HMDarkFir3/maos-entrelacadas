import { UserDTO } from '@dtos/UserDTO';

export interface InitialStateData {
  user: UserDTO['user'] | null;
  accessToken: string | null;
  gender: string | null;
  birthdate: string | null;
  isSigned: boolean;
  isLoading: boolean;
}
