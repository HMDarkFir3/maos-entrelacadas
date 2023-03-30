import { ReactNode } from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { SettingsProvider } from "@contexts/SettingsContext";

import { BackButton } from "@components/Buttons/BackButton";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <SettingsProvider>
    <ThemeProvider theme={light}>{children}</ThemeProvider>
  </SettingsProvider>
);

describe("BackButton Component", () => {
  const onPressBackButtonMock = jest.fn();
  it("should be able to press the button", () => {
    const { getByTestId } = render(
      <BackButton testID="BackButton" onBackButton={onPressBackButtonMock} />,
      {
        wrapper: Providers,
      }
    );

    const backButton = getByTestId("BackButton");
    fireEvent.press(backButton);
  });
  it("should be able to press the button without onBackButton property", () => {
    const { getByTestId } = render(<BackButton testID="BackButton" />, {
      wrapper: Providers,
    });

    const backButton = getByTestId("BackButton");
    fireEvent.press(backButton);
  });
});
