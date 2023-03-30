import { ReactNode } from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import { Activity } from "phosphor-react-native";

import { DatePicker } from "@components/Inputs/DatePicker";

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

describe("DatePicker", () => {
  it("should be able to render the component", () => {
    const onChangeMock = jest.fn();
    const valueMock: Date | null = null;

    const { getByTestId } = render(
      <DatePicker
        icon={() => <Activity />}
        onChange={onChangeMock}
        value={valueMock}
      />,
      {
        wrapper: Providers,
      }
    );

    const datePicker = getByTestId("DatePicker");
    fireEvent.press(datePicker);

    const dateTimePickerModal = getByTestId("DatePicker.DateTimePickerModal");
    fireEvent(dateTimePickerModal, "onConfirm", new Date());
    fireEvent(dateTimePickerModal, "onCancel");
  });

  it("should be able to render the component when value exists", () => {
    const onChangeMock = jest.fn();
    const valueMock: Date | null = new Date();

    const { getByTestId } = render(
      <DatePicker
        icon={() => <Activity />}
        onChange={onChangeMock}
        value={valueMock}
      />,
      {
        wrapper: Providers,
      }
    );

    const datePicker = getByTestId("DatePicker");
    fireEvent.press(datePicker);

    const dateTimePickerModal = getByTestId("DatePicker.DateTimePickerModal");
    fireEvent(dateTimePickerModal, "onConfirm", new Date());
    fireEvent(dateTimePickerModal, "onCancel");
  });
});
