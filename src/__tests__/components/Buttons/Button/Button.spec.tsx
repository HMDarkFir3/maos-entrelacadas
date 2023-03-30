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

describe("Button", () => {
  it("the component rendered correctly", () => {
    const titleProp = "title";

    const { getByText } = render(<Button testID="button" title={titleProp} />, {
      wrapper: Providers,
    });

    const element = getByText(titleProp);
    expect(element).toBeTruthy();
  });
});
