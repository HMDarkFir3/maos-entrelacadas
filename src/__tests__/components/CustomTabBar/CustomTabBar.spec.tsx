import { ReactNode } from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { TabBarProvider } from "@contexts/TabBarContext";

import { CustomTabBar } from "@components/CustomTabBar";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <TabBarProvider>
    <ThemeProvider theme={light}>{children}</ThemeProvider>
  </TabBarProvider>
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

describe("CustomTabBar Component", () => {
  it("should be able to press the home button", () => {
    const { getByTestId } = render(<CustomTabBar />, {
      wrapper: Providers,
    });

    const tabItem1 = getByTestId("CustomTabBar.TabItem1");
    fireEvent.press(tabItem1);
  });

  it("should be able to press the events button", () => {
    const { getByTestId } = render(<CustomTabBar />, {
      wrapper: Providers,
    });

    const tabItem2 = getByTestId("CustomTabBar.TabItem2");
    fireEvent.press(tabItem2);
  });

  it("should be able to press the donations button", () => {
    const { getByTestId } = render(<CustomTabBar />, {
      wrapper: Providers,
    });

    const tabItem3 = getByTestId("CustomTabBar.TabItem3");
    fireEvent.press(tabItem3);
  });

  it("should be able to press the profile button", () => {
    const { getByTestId } = render(<CustomTabBar />, {
      wrapper: Providers,
    });

    const tabItem4 = getByTestId("CustomTabBar.TabItem4");
    fireEvent.press(tabItem4);
  });
});
