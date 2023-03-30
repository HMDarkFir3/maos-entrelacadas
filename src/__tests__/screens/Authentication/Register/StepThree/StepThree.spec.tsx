import { ReactNode } from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { AuthProvider } from "@contexts/AuthContext";

import { StepThree } from "@screens/Authentication/Register/StepThree";

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

describe("StepThree Screen", () => {
  it("should be able to render the component", () => {
    const { getByText } = render(<StepThree />, { wrapper: Providers });

    const title = getByText("Crie sua conta!");
    const description = getByText("Preencha com sua senha, depois a confirme.");

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });

  it("should be able to press the screen", () => {
    const { getByTestId } = render(<StepThree />, {
      wrapper: Providers,
    });

    const inputBlurButton = getByTestId("StepThree.InputBlurButton");
    fireEvent.press(inputBlurButton);
  });

  it("should be able to press the next button", () => {
    const { getByTestId } = render(<StepThree />, {
      wrapper: Providers,
    });

    const smallButton = getByTestId("StepThree.SmallButton");
    fireEvent.press(smallButton);
  });

  it("should be able to press the back button", () => {
    const { getByTestId } = render(<StepThree />, {
      wrapper: Providers,
    });

    const header = getByTestId("StepThree.Header");
    fireEvent.press(header, "onBackButton");
  });

  it("should be able to change the values the inputs", async () => {
    const { getByPlaceholderText, getByTestId } = render(<StepThree />, {
      wrapper: Providers,
    });

    const passwordInput = getByPlaceholderText("Senha");
    const confirmPasswordInput = getByPlaceholderText("Confirmar senha");

    fireEvent.changeText(passwordInput, "123456");
    fireEvent.changeText(confirmPasswordInput, "123456");

    const smallButton = getByTestId("StepThree.SmallButton");
    fireEvent.press(smallButton);
  });
});
