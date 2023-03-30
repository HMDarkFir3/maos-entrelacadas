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

describe("BackButton Component", () => {
  const onPressBackButtonMock = jest.fn();
  it("was pressed the button", () => {
    const { getByTestId } = render(
      <BackButton testID="BackButton" onBackButton={onPressBackButtonMock} />,
      {
        wrapper: Providers,
      }
    );

    const backButton = getByTestId("BackButton");
    fireEvent.press(backButton);
  });
  it("was pressed the button without onBackButton prop", () => {
    const { getByTestId } = render(<BackButton testID="BackButton" />, {
      wrapper: Providers,
    });

    const backButton = getByTestId("BackButton");
    fireEvent.press(backButton);
  });
});
