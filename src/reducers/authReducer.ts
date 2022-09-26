export interface AuthState {
  sawIntroduction: boolean;
}

export type AuthAction = {
  type: "SET_SAW_INTRODUCTION";
  payload: boolean;
};

export const initialState: AuthState = {
  sawIntroduction: false,
};

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "SET_SAW_INTRODUCTION": {
      return {
        ...state,
        sawIntroduction: action.payload as boolean,
      };
    }
    default: {
      throw new Error("action not supported");
    }
  }
};
