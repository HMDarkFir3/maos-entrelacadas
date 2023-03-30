import { ReactNode } from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import { Activity } from "phosphor-react-native";

import { SettingsItem } from "@components-of-screens/Profile/components/SettingsItem";

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

describe("SettigsItem Component", () => {
  it("should be able to render the component correctly", () => {
    const titleMock = "title";

    const { getByText } = render(
      <SettingsItem icon={() => <Activity />} title={titleMock} />,
      { wrapper: Providers }
    );

    const title = getByText(titleMock);
    expect(title).toBeTruthy();
  });
});
