import { ReactNode } from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { SettingsProvider } from "@contexts/SettingsContext";

import { Button } from "@components/Buttons/Button";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <SettingsProvider>
    <ThemeProvider theme={light}>{children}</ThemeProvider>
  </SettingsProvider>
);

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
