import { ReactNode } from 'react';
import { render, fireEvent, renderHook } from '@testing-library/react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ThemeProvider } from 'styled-components/native';
import { Activity } from 'phosphor-react-native';

import { store } from '@store/index';

import { SettingsProvider } from '@contexts/SettingsContext';

import { DatePicker } from '@components/Inputs/DatePicker';

import { light } from '@themes/light';

const Providers = ({ children }: { children: ReactNode }) => (
  <ReduxProvider store={store}>
    <SettingsProvider>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </SettingsProvider>
  </ReduxProvider>
);

describe('DatePicker', () => {
  const controlMock = renderHook(() => useForm().control).result.current;
  const datePickerNameMock = 'name';
  const errorMock = 'error';

  it('should be able to render the component', () => {
    const dirtyValueMock = '2022-01-01';

    const { getByTestId } = render(
      <DatePicker
        testDateTimePickerModalID="DatePicker.DateTimePickerModal"
        icon={() => <Activity />}
        control={controlMock}
        datePickerName={datePickerNameMock}
        dirtyValue={dirtyValueMock}
        error={errorMock}
      />,
      {
        wrapper: Providers,
      }
    );

    const datePicker = getByTestId('DatePicker');
    fireEvent.press(datePicker);

    const dateTimePickerModal = getByTestId('DatePicker.DateTimePickerModal');
    fireEvent(dateTimePickerModal, 'onConfirm', new Date());
    fireEvent(dateTimePickerModal, 'onCancel');
  });

  it("should be able to render the component when dont have 'dirtyValue'", () => {
    const dirtyValueMock = '';

    const { getByTestId } = render(
      <DatePicker
        testDateTimePickerModalID="DatePicker.DateTimePickerModal"
        icon={() => <Activity />}
        control={controlMock}
        datePickerName={datePickerNameMock}
        dirtyValue={dirtyValueMock}
        error={errorMock}
      />,
      {
        wrapper: Providers,
      }
    );

    const datePicker = getByTestId('DatePicker');
    fireEvent.press(datePicker);

    const dateTimePickerModal = getByTestId('DatePicker.DateTimePickerModal');
    fireEvent(dateTimePickerModal, 'onConfirm', new Date());
    fireEvent(dateTimePickerModal, 'onCancel');
  });
});
