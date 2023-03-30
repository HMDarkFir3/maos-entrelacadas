import { ReactNode } from "react";
import { Alert } from "react-native";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { AuthProvider } from "@contexts/AuthContext";
import { TabBarProvider } from "@contexts/TabBarContext";

import { Header } from "@components-of-screens/Home/components/Header";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <AuthProvider>
    <TabBarProvider>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </TabBarProvider>
  </AuthProvider>
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
  it("should be able to press the profile button", () => {
    const { getByTestId } = render(<Header />, { wrapper: Providers });

    const profileButton = getByTestId("Header.ProfileButton");
    fireEvent.press(profileButton);
  });

  it("should be able to press the sign out button", async () => {
    const alertMock = jest.spyOn(Alert, "alert");

    const { getByTestId } = render(<Header />, {
      wrapper: Providers,
    });

    const signOutButton = getByTestId("Header.SignOutButton");
    fireEvent.press(signOutButton);

    expect(alertMock).toHaveBeenCalledWith(
      "Sair",
      "Deseja sair da aplicação?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: expect.any(Function),
        },
      ],
      { cancelable: true }
    );

    const alertButtons = alertMock.mock.calls[0][2];
    const alertButton = alertButtons?.find((button) => button.text === "Sim");

    if (alertButton) {
      if (alertButton.onPress) {
        alertButton.onPress();
      }
    } else {
      throw new Error("Alert button not found");
    }
  });
});
