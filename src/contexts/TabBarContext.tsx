import { createContext, useReducer, FC, Dispatch, ReactNode, Reducer } from "react";

import { tabBarReducer, initialState, TabBarState, TabBarAction } from "@reducers/tabBarReducer";

export interface TabBarContextData {
  state: TabBarState;
  dispatch: Dispatch<TabBarAction>;
}

interface TabBarProviderProps {
  children: ReactNode;
}

export const TabBarContext = createContext({} as TabBarContextData);

export const TabBarProvider: FC<TabBarProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<TabBarState, TabBarAction>>(
    tabBarReducer,
    initialState
  );

  return <TabBarContext.Provider value={{ state, dispatch }}>{children}</TabBarContext.Provider>;
};
