import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { light } from "@themes/light";

import { Button } from "../index";

jest.mock("@hooks/useSettings", () => {
  return {
    useSettings: () => {
      return {
        fontSizeValue: jest.fn().mockReturnValue(16),
      };
    },
  };
});

describe("Button", () => {
  it("the component rendered correctly", () => {
    const titleProp = "title";

    const { getByText } = render(
      <ThemeProvider theme={light}>
        <Button title={titleProp} />
      </ThemeProvider>
    );

    const element = getByText(titleProp);
    expect(element).toBeTruthy();
  });
});
