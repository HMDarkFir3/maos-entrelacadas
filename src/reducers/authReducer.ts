import { UserDTO } from "@dtos/UserDTO";

enum ActionType {
  SET_SAW_INTRODUCTION = "SET_SAW_INTRODUCTION",
  SET_FIELD = "SET_FIELD",
  SET_USER = "SET_USER",
  SET_EMPTY_FIELDS = "SET_EMPTY_FIELDS",
  SET_IS_LOADING = "SET_IS_LOADING",
}

export interface AuthState {
  givenName: string;
  email: string;
  gender: string;
  birthdate: Date | null;
  password: string;
  confirmPassword: string;
  sawIntroduction: boolean;
  isSigned: boolean;
  isLoading: boolean;
  user: UserDTO | null;
}

export type AuthAction =
  | {
      type: "SET_SAW_INTRODUCTION" | "SET_IS_LOADING";
      payload: boolean;
    }
  | {
      type: "SET_FIELD";
      fieldName: keyof AuthState;
      payload: string | Date;
    }
  | {
      type: "SET_USER";
      payload: UserDTO | null;
    }
  | {
      type: "SET_EMPTY_FIELDS";
    };

export const initialState = {
  user: null,
  givenName: "",
  email: "",
  password: "",
  gender: "",
  birthdate: null,
  confirmPassword: "",
  sawIntroduction: false,
  isSigned: false,
  isLoading: false,
} as AuthState;

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case ActionType.SET_SAW_INTRODUCTION: {
      return {
        ...state,
        sawIntroduction: action.payload,
      };
    }
    case ActionType.SET_FIELD: {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case ActionType.SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case ActionType.SET_EMPTY_FIELDS: {
      return {
        ...state,
        ...initialState,
      };
    }
    case ActionType.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default: {
      throw new Error("action not supported");
    }
  }
};
