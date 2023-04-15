import { UserDTO } from '@dtos/UserDTO';

export interface InitialStateData {
  user: UserDTO['user'] | null;
  accessToken: string | null;
  isSigned: boolean;
  isLoading: boolean;
}
