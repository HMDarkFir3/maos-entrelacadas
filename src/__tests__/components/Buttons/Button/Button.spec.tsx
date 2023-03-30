import { ReactNode } from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { Button } from "@components/Buttons/Button";

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

describe("Button Component", () => {
  it("should be able to render the component", () => {
    const titleMock = "title";

    const { getByText } = render(<Button title={titleMock} />, {
      wrapper: Providers,
    });

    const element = getByText(titleMock);
    expect(element).toBeTruthy();
  });
});
