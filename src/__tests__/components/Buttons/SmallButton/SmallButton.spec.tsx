import { ReactNode } from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import { Activity } from "phosphor-react-native";

import { SmallButton } from "@components/Buttons/SmallButton";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={light}>{children}</ThemeProvider>
);

describe("SmallButton Component", () => {
  it("component rendered correctly when isLoading is false", () => {
    render(<SmallButton icon={() => <Activity />} isLoading={false} />, {
      wrapper: Providers,
    });
  });

  it("component rendered correctly when isLoading is true", () => {
    render(<SmallButton icon={() => <Activity />} isLoading />, {
      wrapper: Providers,
    });
  });
});
