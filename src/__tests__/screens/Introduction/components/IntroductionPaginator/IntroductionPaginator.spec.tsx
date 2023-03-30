import { ReactNode } from "react";
import { Animated } from "react-native";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { IntroductionPaginator } from "@components-of-screens/Introduction/components/IntroductionPaginator";

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

describe("IntroductionPaginator Component", () => {
  it("should be able to render IntroductionPaginator", () => {
    const mockData = [
      {
        id: "1",
        title: "Boas vindas!",
        description: "Seja bem-vindo(a) ao Mãos Entrelaçadas APP.",
      },
      {
        id: "2",
        title: "Fique por dentro!",
        description:
          "Esteja antenado, por dentro e ciente das atividades da Organização. Atualiza aí!",
      },
      {
        id: "3",
        title: "Se Voluntarie!",
        description:
          "Ajude-nos de maneira voluntária, com seus conhecimentos técnicos em prol da Instituição.",
      },
      {
        id: "4",
        title: "Doe para nossa causa!",
        description:
          "Participe, ajude e contribua com recursos financeiros à manutenção de atividades da Instituição.",
      },
    ];
    const scrollXMock = new Animated.Value(0);

    const { getAllByTestId } = render(
      <IntroductionPaginator data={mockData} scrollX={scrollXMock} />,
      {
        wrapper: Providers,
      }
    );

    const dot = getAllByTestId("IntroductionPaginator.Dot");
    expect(dot).toBeTruthy();
  });
});
