import { ReactNode } from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { AuthProvider } from "@contexts/AuthContext";

import { Header } from "@components-of-screens/Profile/components/Header";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <AuthProvider>
    <ThemeProvider theme={light}>{children}</ThemeProvider>
  </AuthProvider>
);

jest.mock("@hooks/useSettings", () => {
  return {
    useSettings: () => {
      return {
        fontSizeValue: jest.fn().mockReturnValue(16),
      };
    },
  };
});

describe("Header Component", () => {
  it("should be able to render the component correctly", () => {
    const { getByTestId } = render(<Header />, { wrapper: Providers });
  });

  it("should be able to press user info button", () => {
    const { getByTestId } = render(<Header />, { wrapper: Providers });

    const profileButton = getByTestId("Header.Container");
    fireEvent.press(profileButton);
  });
});
