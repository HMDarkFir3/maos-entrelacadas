import { ReactNode } from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { SettingsProvider } from "@contexts/SettingsContext";

import { Header } from "@components-of-screens/Authentication/components/Header";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <SettingsProvider>
    <ThemeProvider theme={light}>{children}</ThemeProvider>
  </SettingsProvider>
);

describe("Header Component", () => {
  it("should be able to render the component", () => {
    const onBackButtonMock = jest.fn();

    const { getByText } = render(
      <Header
        title="Faça login"
        description="Queremos impactar de forma positiva a sua vida e de sua comunidade."
        onBackButton={onBackButtonMock}
      />,
      { wrapper: Providers }
    );

    const title = getByText("Faça login");
    const description = getByText(
      "Queremos impactar de forma positiva a sua vida e de sua comunidade."
    );

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });
});
