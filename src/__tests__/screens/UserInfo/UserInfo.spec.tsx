import { ReactNode } from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { AuthProvider } from "@contexts/AuthContext";
import { SettingsProvider } from "@contexts/SettingsContext";

import { UserInfo } from "@screens/UserInfo";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <AuthProvider>
    <SettingsProvider>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </SettingsProvider>
  </AuthProvider>
);

describe("UserInfo Screen", () => {
  it("should be able to render the component correctly", () => {
    render(<UserInfo />, { wrapper: Providers });
  });
});
