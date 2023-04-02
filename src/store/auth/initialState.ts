import { InitialStateData } from "@store/auth/types";

export const initialState: InitialStateData = {
  user: null,
  givenName: "",
  email: "",
  password: "",
  gender: "",
  birthdate: null,
  confirmPassword: "",
  isSigned: false,
  isLoading: false,
};
