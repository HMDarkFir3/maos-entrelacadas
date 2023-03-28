import { ReactNode } from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { BackButton } from "@components/Buttons/BackButton";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={light}>{children}</ThemeProvider>
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

describe("BackButton", () => {
  it("the component rendered correctly", () => {
    const onPressBackButtonMock = jest.fn();

    const { getByTestId } = render(
      <BackButton testID="back-button" onBackButton={onPressBackButtonMock} />,
      {
        wrapper: Providers,
      }
    );

    const backButton = getByTestId("back-button");
    fireEvent.press(backButton);
  });
});
