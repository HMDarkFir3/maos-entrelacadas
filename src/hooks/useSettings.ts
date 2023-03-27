import { useContext } from "react";

import { SettingsContext, SettingsContextData } from "@contexts/SettingsContext";

export const useSettings = (): SettingsContextData => useContext(SettingsContext);
