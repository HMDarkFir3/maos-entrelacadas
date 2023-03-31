import { ReactNode } from "react";
import { render } from "@testing-library/react-native";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components/native";

import { store } from "@store/index";

import { SettingsProvider } from "@contexts/SettingsContext";

import { IntroductionSlider } from "@components-of-screens/Introduction/components/IntroductionSlider";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <ReduxProvider store={store}>
    <SettingsProvider>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </SettingsProvider>
  </ReduxProvider>
);

describe("IntroductionSlider Component", () => {
  it("should be able to render with id = 1", () => {
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

  it("should be able to render with id = 2", () => {
    const mockData = {
      id: "2",
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

  it("should be able to render with id = 3", () => {
    const mockData = {
      id: "3",
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

  it("should be able to render with id = 4", () => {
    const mockData = {
      id: "4",
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
