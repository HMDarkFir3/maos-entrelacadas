import { UserDTO } from "@dtos/UserDTO";

export interface AuthState {
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

export const initialState = {
  user: null,
  givenName: "",
  email: "",
  password: "",
  gender: "",
  birthdate: null,
  confirmPassword: "",
  isSigned: false,
  isLoading: false,
} as AuthState;
