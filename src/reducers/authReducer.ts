enum ActionType {
  SET_SAW_INTRODUCTION = "SET_SAW_INTRODUCTION",
  SET_IS_LOADING = "SET_IS_LOADING",
}

export interface AuthState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  sawIntroduction: boolean;
  isSigned: boolean;
  isLoading: boolean;
}

export type AuthAction = {
  type: "SET_SAW_INTRODUCTION" | "SET_IS_LOADING";
  payload: boolean;
};

export const initialState: AuthState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  sawIntroduction: false,
  isSigned: false,
  isLoading: false,
};

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case ActionType.SET_SAW_INTRODUCTION: {
      return {
        ...state,
        sawIntroduction: action.payload,
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
