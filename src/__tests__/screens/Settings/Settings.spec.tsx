import { ReactNode } from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { AuthProvider } from "@contexts/AuthContext";

import { Settings } from "@screens/Settings";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <AuthProvider>
    <ThemeProvider theme={light}>{children}</ThemeProvider>
  </AuthProvider>
);

jest.mock("@hooks/useSettings", () => {
  return {
    useSettings: () => ({
      state: {
        theme: {
          title: "light",
        },
        fontSize: {
          name: "normal",
        },
      },
      toggleTheme: jest.fn(),
      fontSizeValue: jest.fn(),
    }),
  };
});

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

    act(() => {
      fireEvent(notificationSwitcher, "onSwitchValue");
    });
  });
});
