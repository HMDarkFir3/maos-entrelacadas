import { useContext } from "react";

import { TabBarContext, TabBarContextData } from "@contexts/TabBarContext";

export const useTabBar = (): TabBarContextData => useContext(TabBarContext);
