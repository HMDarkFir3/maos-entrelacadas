import { ReactNode } from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { AuthProvider } from "@contexts/AuthContext";
import { SettingsProvider } from "@contexts/SettingsContext";

import { Settings } from "@screens/Settings";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <AuthProvider>
    <SettingsProvider>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </SettingsProvider>
  </AuthProvider>
);

describe("Settings Screen", () => {
  it("should be able to press the theme switcher", () => {
    const { getByText } = render(<Settings />, { wrapper: Providers });

    const themeSwitcher = getByText("Tema escuro");

    act(() => {
      fireEvent(themeSwitcher, "onSwitchValue");
    });

    render(<Settings />, { wrapper: Providers });

    act(() => {
      fireEvent(themeSwitcher, "onSwitchValue");
    });
  });

  it("should be able to press the notification switcher", () => {
    const { getByText } = render(<Settings />, { wrapper: Providers });

    const notificationSwitcher = getByText("Receber notificações");
    fireEvent(notificationSwitcher, "onSwitchValue");
  });
});
