export interface TabBarState {
  isActive: "Home" | "Events" | "Donations" | "Profile";
}

export type TabBarAction = {
  type: "SET_IS_ACTIVE";
  payload: "Home" | "Events" | "Donations" | "Profile";
};

export const initialState = {
  isActive: "Home",
} as TabBarState;

export const tabBarReducer = (state: TabBarState, action: TabBarAction) => {
  switch (action.type) {
    case "SET_IS_ACTIVE": {
      return {
        ...state,
        isActive: action.payload,
      };
    }
    default: {
      throw new Error("action not supported");
    }
  }
};
