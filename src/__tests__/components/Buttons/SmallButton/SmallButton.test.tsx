import { ReactNode } from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import { Activity } from "phosphor-react-native";

import { SmallButton } from "@components/Buttons/SmallButton";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={light}>{children}</ThemeProvider>
);

describe("SmallButton", () => {
  it("the component rendered correctly", () => {
    render(<SmallButton icon={() => <Activity />} isLoading={false} />, {
      wrapper: Providers,
    });
  });
});
