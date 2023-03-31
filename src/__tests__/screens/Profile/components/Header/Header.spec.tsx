import { ReactNode } from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { AuthProvider } from "@contexts/AuthContext";
import { SettingsProvider } from "@contexts/SettingsContext";

import { Header } from "@components-of-screens/Profile/components/Header";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <AuthProvider>
    <SettingsProvider>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </SettingsProvider>
  </AuthProvider>
);

describe("Header Component", () => {
  it("should be able to render the component correctly", () => {
    render(<Header />, { wrapper: Providers });
  });

  it("should be able to press user info button", () => {
    const { getByTestId } = render(<Header />, { wrapper: Providers });

    const profileButton = getByTestId("Header.Container");
    fireEvent.press(profileButton);
  });
});