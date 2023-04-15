import { ReactNode } from 'react';
import { render, fireEvent, renderHook } from '@testing-library/react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ThemeProvider } from 'styled-components/native';
import { Activity } from 'phosphor-react-native';

import { store } from '@store/index';

import { SettingsProvider } from '@contexts/SettingsContext';

import { Input } from '@components/Inputs/Input';

import { light } from '@themes/light';

const Providers = ({ children }: { children: ReactNode }) => (
  <ReduxProvider store={store}>
    <SettingsProvider>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </SettingsProvider>
  </ReduxProvider>
);

describe('Input', () => {
  const controlMock = renderHook(() => useForm().control).result.current;
  const inputNameMock = 'name';

  it('should be able to render the component', () => {
    const errorMock = 'error';

    render(
      <Input
        control={controlMock}
        inputName={inputNameMock}
        error={errorMock}
        icon={() => <Activity />}
        maxLength={10}
      />,
      {
        wrapper: Providers,
      }
    );
  });

  it('should be able to render the component when pressed toggle password', () => {
    const errorMock = 'error';

    const { getByTestId } = render(
      <Input
        control={controlMock}
        inputName={inputNameMock}
        error={errorMock}
        icon={() => <Activity />}
        isPassword
      />,
      {
        wrapper: Providers,
      }
    );

    const togglePasswordVisibilityButton = getByTestId('Input.TogglePasswordVisibilityButton');
    fireEvent.press(togglePasswordVisibilityButton);
  });

  it('should be able to render the component when it dont have an error', () => {
    const errorMock = null;

    render(
      <Input
        control={controlMock}
        inputName={inputNameMock}
        error={errorMock}
        icon={() => <Activity />}
      />,
      {
        wrapper: Providers,
      }
    );
  });
});
