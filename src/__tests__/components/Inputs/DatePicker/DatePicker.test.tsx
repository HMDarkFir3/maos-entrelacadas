import { ReactNode } from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import { Activity } from "phosphor-react-native";

import { DatePicker } from "@components/Inputs/DatePicker";

import { light } from "@themes/light";
import { act } from "react-test-renderer";

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
  it("the component rendered correctly", () => {
    const onChangeMock = jest.fn();
    let valueMock: Date | null = null;

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

    const datePicker = getByTestId("date-picker");
    fireEvent.press(datePicker);

    const dateTimePickerModal = getByTestId("date-time-picker-modal");
    fireEvent(dateTimePickerModal, "onConfirm", new Date());
    fireEvent(dateTimePickerModal, "onCancel");
  });
});
