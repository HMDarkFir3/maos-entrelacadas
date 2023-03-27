import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { light } from "@themes/light";

import { BackButton } from "../index";

jest.mock("@hooks/useSettings", () => {
  return {
    useSettings: () => {
      return {
        fontSizeValue: jest.fn().mockReturnValue(16),
      };
    },
  };
});

describe("BackButton", () => {
  it("the component rendered correctly", () => {
    render(
      <ThemeProvider theme={light}>
        <BackButton />
      </ThemeProvider>
    );
  });
});
