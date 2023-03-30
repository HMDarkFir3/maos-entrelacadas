import { ReactNode } from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { SettingsProvider } from "@contexts/SettingsContext";

import { IntroductionSlider } from "@components-of-screens/Introduction/components/IntroductionSlider";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <SettingsProvider>
    <ThemeProvider theme={light}>{children}</ThemeProvider>
  </SettingsProvider>
);

describe("IntroductionSlider Component", () => {
  it("should be able to render IntroductionSlider", () => {
    const mockData = {
      id: "1",
      title: "Boas vindas!",
      description: "Seja bem-vindo(a) ao Mãos Entrelaçadas APP.",
    };

    const { getByText } = render(<IntroductionSlider data={mockData} />, {
      wrapper: Providers,
    });

    const title = getByText("Boas vindas!");
    const description = getByText(
      "Seja bem-vindo(a) ao Mãos Entrelaçadas APP."
    );

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });
});
