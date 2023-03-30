import { ReactNode } from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { AuthProvider } from "@contexts/AuthContext";

import { Login } from "@screens/Authentication/Login";

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

describe("Login Screen", () => {
  it("should be able to render the component", () => {
    const { getByText } = render(<Login />, { wrapper: Providers });

    const title = getByText("Faça login");
    const description = getByText(
      "Queremos impactar de forma positiva a sua vida e de sua comunidade."
    );

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });

  it("should be able to press the screen", () => {
    const { getByTestId } = render(<Login />, {
      wrapper: Providers,
    });

    const inputBlurButton = getByTestId("Login.InputBlurButton");
    fireEvent.press(inputBlurButton);
  });

  it("should be able to press the login button", () => {
    const { getByTestId } = render(<Login />, {
      wrapper: Providers,
    });

    const smallButton = getByTestId("Login.SmallButton");
    fireEvent.press(smallButton);
  });

  it("should be able to press the back button", () => {
    const { getByTestId } = render(<Login />, {
      wrapper: Providers,
    });

    const header = getByTestId("Login.Header");
    fireEvent.press(header, "onBackButton");
  });

  it("should be able to change the values the inputs", () => {
    const { getByPlaceholderText, getByTestId } = render(<Login />, {
      wrapper: Providers,
    });

    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Senha");

    fireEvent.changeText(emailInput, "henrique@test.com");
    fireEvent.changeText(passwordInput, "123456");
  });
});
