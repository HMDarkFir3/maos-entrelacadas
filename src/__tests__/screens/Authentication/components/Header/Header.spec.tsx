import { ReactNode } from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { Header } from "@components-of-screens/Authentication/components/Header";

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
