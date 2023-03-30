import { ReactNode } from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { AuthProvider } from "@contexts/AuthContext";
import { SettingsProvider } from "@contexts/SettingsContext";

import { FontSwitcher } from "@components-of-screens/Settings/components/FontSwitcher";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <AuthProvider>
    <SettingsProvider>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </SettingsProvider>
  </AuthProvider>
);

describe("FontSwitcher Component", () => {
  it("should be able to press the open font switcher button", () => {
    const { getByTestId } = render(<FontSwitcher />, { wrapper: Providers });

    const openFontSwitcherButton = getByTestId(
      "FontSwitcher.OpenFontSwitcherButton"
    );
    fireEvent.press(openFontSwitcherButton);
  });

  it("should be able to press the list item", () => {
    const { getByTestId, getAllByTestId } = render(<FontSwitcher />, {
      wrapper: Providers,
    });

    const openFontSwitcherButton = getByTestId(
      "FontSwitcher.OpenFontSwitcherButton"
    );
    fireEvent.press(openFontSwitcherButton);

    const list = getByTestId("FontSwitcher.List");
    expect(list).toBeTruthy();

    const item = getAllByTestId("FontSwitcher.Item");
    fireEvent.press(item[0]);
  });
});
