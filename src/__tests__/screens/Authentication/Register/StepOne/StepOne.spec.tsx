import { ReactNode } from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { AuthProvider } from "@contexts/AuthContext";

import { StepOne } from "@screens/Authentication/Register/StepOne";

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

describe("StepOne Screen", () => {
  it("should be able to render the component", () => {
    const { getByText } = render(<StepOne />, { wrapper: Providers });

    const title = getByText("Crie sua conta!");
    const description = getByText(
      "Vamos começar preenchendo seus dados, começando com seu nome."
    );

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });

  it("should be able to press the screen", () => {
    const { getByTestId } = render(<StepOne />, {
      wrapper: Providers,
    });

    const inputBlurButton = getByTestId("StepOne.InputBlurButton");
    fireEvent.press(inputBlurButton);
  });

  it("should be able to press the login button", () => {
    const { getByTestId } = render(<StepOne />, {
      wrapper: Providers,
    });

    const smallButton = getByTestId("StepOne.SmallButton");
    fireEvent.press(smallButton);
  });

  it("should be able to press the back button", () => {
    const { getByTestId } = render(<StepOne />, {
      wrapper: Providers,
    });

    const header = getByTestId("StepOne.Header");
    fireEvent.press(header, "onBackButton");
  });

  it("should be able to change the values the inputs", async () => {
    const { getByTestId } = render(<StepOne />, {
      wrapper: Providers,
    });

    const givenNameInput = getByTestId("StepOne.GivenNameInput");
    const emailInput = getByTestId("StepOne.EmailInput");

    fireEvent.changeText(givenNameInput, "John Doe");
    fireEvent.changeText(emailInput, "johndoe@example.com");

    const smallButton = getByTestId("StepOne.SmallButton");
    fireEvent.press(smallButton);
  });
});
