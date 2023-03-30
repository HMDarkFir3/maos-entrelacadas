import { ReactNode } from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import { Activity } from "phosphor-react-native";

import { Input } from "@components/Inputs/Input";

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

describe("Input", () => {
  it("the component rendered correctly", () => {
    render(<Input icon={() => <Activity />} maxLength={10} />, {
      wrapper: Providers,
    });
  });

  it("pressed toggle password", () => {
    const { getByTestId } = render(
      <Input icon={() => <Activity />} isPassword />,
      {
        wrapper: Providers,
      }
    );

    const togglePasswordVisibilityButton = getByTestId(
      "Input.TogglePasswordVisibilityButton"
    );
    fireEvent.press(togglePasswordVisibilityButton);
  });
});
