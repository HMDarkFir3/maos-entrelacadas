import { ReactNode } from 'react';
import { render, fireEvent, renderHook } from '@testing-library/react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ThemeProvider } from 'styled-components/native';
import { Activity } from 'phosphor-react-native';

import { store } from '@store/index';

import { SettingsProvider } from '@contexts/SettingsContext';

import { Select } from '@components/Inputs/Select';

import { light } from '@themes/light';

const Providers = ({ children }: { children: ReactNode }) => (
  <ReduxProvider store={store}>
    <SettingsProvider>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </SettingsProvider>
  </ReduxProvider>
);

describe('Select', () => {
  const dataMock = [
    {
      id: '1',
      name: 'Masculino',
    },
    {
      id: '2',
      name: 'Feminino',
    },
  ];
  const controlMock = renderHook(() => useForm().control).result.current;
  const selectNameMock = 'name';
  const errorMock = 'error';

  it('should be able to render the component when pressed the select', () => {
    const dirtyValueMock = 'Masculino';

    const { getByTestId } = render(
      <Select
        icon={() => <Activity />}
        data={dataMock}
        control={controlMock}
        selectName={selectNameMock}
        dirtyValue={dirtyValueMock}
        error={errorMock}
      />,
      {
        wrapper: Providers,
      }
    );

    const selectWrapper = getByTestId('Select.Wrapper');
    fireEvent.press(selectWrapper);
  });

  it('should be able to render the component when selected an item', () => {
    const dirtyValueMock = '';

    const { getByTestId, getByText } = render(
      <Select
        icon={() => <Activity />}
        data={dataMock}
        control={controlMock}
        selectName={selectNameMock}
        dirtyValue={dirtyValueMock}
        error={errorMock}
      />,
      {
        wrapper: Providers,
      }
    );

    const selectWrapper = getByTestId('Select.Wrapper');
    fireEvent.press(selectWrapper);

    const selectItem = getByText(/masculino/i);
    fireEvent.press(selectItem);
  });
});
