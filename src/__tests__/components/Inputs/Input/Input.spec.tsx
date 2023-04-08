import { ReactNode } from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider as ReduxProvider } from 'react-redux';
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
  it('should be able to render the component', () => {
    render(<Input icon={() => <Activity />} maxLength={10} />, {
      wrapper: Providers,
    });
  });

  it('should be able to render the component when pressed toggle password', () => {
    const { getByTestId } = render(<Input icon={() => <Activity />} isPassword />, {
      wrapper: Providers,
    });

    const togglePasswordVisibilityButton = getByTestId('Input.TogglePasswordVisibilityButton');
    fireEvent.press(togglePasswordVisibilityButton);
  });
});
