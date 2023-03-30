import { ReactNode } from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { AuthProvider } from "@contexts/AuthContext";

import { StepTwo } from "@screens/Authentication/Register/StepTwo";

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

describe("StepTwo Screen", () => {
  it("should be able to render the component", () => {
    const { getByText } = render(<StepTwo />, { wrapper: Providers });

    const title = getByText("Crie sua conta!");
    const description = getByText(
      "Selecione seu gênero e preecha sua data de nascimento."
    );

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });

  it("should be able to press the next button", () => {
    const { getByTestId } = render(<StepTwo />, {
      wrapper: Providers,
    });

    const smallButton = getByTestId("StepTwo.SmallButton");
    fireEvent.press(smallButton);
  });

  it("should be able to press the back button", () => {
    const { getByTestId } = render(<StepTwo />, {
      wrapper: Providers,
    });

    const header = getByTestId("StepTwo.Header");
    fireEvent.press(header, "onBackButton");
  });

  it("should be able to select a gender and a birthdate", () => {
    const { getByText, getByTestId } = render(<StepTwo />, {
      wrapper: Providers,
    });

    const genderInput = getByText("Gênero");
    fireEvent.press(genderInput);

    const genderSelected = getByText("Masculino");
    fireEvent.press(genderSelected);

    const birthdateInput = getByText("Data de Nascimento");
    fireEvent.press(birthdateInput);

    const dateTimePickerModal = getByTestId("StepTwo.DatePicker");

    expect(dateTimePickerModal).toBeTruthy();

    fireEvent(dateTimePickerModal, "onConfirm", new Date());

    const smallButton = getByTestId("StepTwo.SmallButton");
    fireEvent.press(smallButton);
  });
});
