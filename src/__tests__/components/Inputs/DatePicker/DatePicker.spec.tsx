import { ReactNode } from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import { Activity } from "phosphor-react-native";

import { store } from "@store/index";

import { SettingsProvider } from "@contexts/SettingsContext";

import { DatePicker } from "@components/Inputs/DatePicker";

import { light } from "@themes/light";

const Providers = ({ children }: { children: ReactNode }) => (
  <ReduxProvider store={store}>
    <SettingsProvider>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </SettingsProvider>
  </ReduxProvider>
);

describe("DatePicker", () => {
  it("should be able to render the component", () => {
    const onChangeMock = jest.fn();
    const valueMock: Date | null = null;

    const { getByTestId } = render(
      <DatePicker
        testDateTimePickerModalID="DatePicker.DateTimePickerModal"
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
        testDateTimePickerModalID="DatePicker.DateTimePickerModal"
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

  it("should be able to render the component when onChange not exists", () => {
    const valueMock: Date | null = null;

    const { getByTestId } = render(
      <DatePicker
        testDateTimePickerModalID="DatePicker.DateTimePickerModal"
        icon={() => <Activity />}
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
