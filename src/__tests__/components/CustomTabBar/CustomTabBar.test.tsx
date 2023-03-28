import { ReactNode } from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { useTabBar } from "@hooks/useTabBar";

import { CustomTabBar } from "@components/CustomTabBar";

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

jest.mock("@hooks/useTabBar", () => {
  return {
    useTabBar: () => {
      return {
        state: {
          isActive: "Home",
        },
        dispatch: jest.fn(),
      };
    },
  };
});

describe("CustomTabBar", () => {
  it("the component rendered correctly", () => {
    const { getByTestId } = render(<CustomTabBar />, {
      wrapper: Providers,
    });

    const tabItem1 = getByTestId("tab-item-1");
    fireEvent.press(tabItem1);

    const tabItem2 = getByTestId("tab-item-2");
    fireEvent.press(tabItem2);

    const tabItem3 = getByTestId("tab-item-3");
    fireEvent.press(tabItem3);

    const tabItem4 = getByTestId("tab-item-4");
    fireEvent.press(tabItem4);
  });
});
