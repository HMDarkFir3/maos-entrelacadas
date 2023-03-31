import { ReactNode } from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components/native";

import { store } from "@store/index";

import { SettingsProvider } from "@contexts/SettingsContext";

import { Welcome } from "@screens/Welcome";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <ReduxProvider store={store}>
    <SettingsProvider>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </SettingsProvider>
  </ReduxProvider>
);

describe("Welcome Screen", () => {
  it("verify if the texts rendered correctly", () => {
    const { getByText } = render(<Welcome />, { wrapper: Providers });

    const title = getByText("Boas-vindas!");
    const description = getByText(
      "Queremos impactar de forma positiva a sua vida e de sua comunidade."
    );

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });

  it("verify if the login button is rendered correctly", () => {
    const { getByText } = render(<Welcome />, { wrapper: Providers });

    const loginButton = getByText("Login");
    expect(loginButton).toBeTruthy();
    fireEvent.press(loginButton, "onPress");
  });

  it("verify if the register button is rendered correctly", () => {
    const { getByTestId } = render(<Welcome />, { wrapper: Providers });

    const registerButton = getByTestId("Welcome.RegisterButton");
    expect(registerButton).toBeTruthy();
    fireEvent.press(registerButton, "onPress");
  });
});
