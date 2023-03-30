import { ReactNode } from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import { Activity } from "phosphor-react-native";

import { SettingsProvider } from "@contexts/SettingsContext";

import { Select } from "@components/Inputs/Select";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <SettingsProvider>
    <ThemeProvider theme={light}>{children}</ThemeProvider>
  </SettingsProvider>
);

describe("Select", () => {
  const onChangeMock = jest.fn();
  const dataMock = [
    {
      id: 1,
      name: "Masculino",
    },
    {
      id: 2,
      name: "Feminino",
    },
  ];

  it("should be able to render the component when pressed the select", () => {
    const { getByTestId } = render(
      <Select
        icon={() => <Activity />}
        data={dataMock}
        onChange={onChangeMock}
        value=""
      />,
      {
        wrapper: Providers,
      }
    );

    const selectWrapper = getByTestId("Select.Wrapper");
    fireEvent.press(selectWrapper);
  });

  it("should be able to render the component when selected an item", () => {
    const { getByTestId, getByText } = render(
      <Select
        icon={() => <Activity />}
        data={dataMock}
        onChange={onChangeMock}
        value="Feminino"
      />,
      {
        wrapper: Providers,
      }
    );

    const selectWrapper = getByTestId("Select.Wrapper");
    fireEvent.press(selectWrapper);

    const selectItem = getByText(/masculino/i);
    fireEvent.press(selectItem);

    expect(onChangeMock).toBeCalledWith("Masculino");
  });
});
