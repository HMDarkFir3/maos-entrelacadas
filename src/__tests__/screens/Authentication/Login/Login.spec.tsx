import { ReactNode } from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { store } from '@store/index';

import { AuthProvider } from '@contexts/AuthContext';
import { SettingsProvider } from '@contexts/SettingsContext';

import { Login } from '@screens/Authentication/Login';

import { light } from '@themes/light';

const Providers = ({ children }: { children: ReactNode }) => (
  <ReduxProvider store={store}>
    <AuthProvider>
      <SettingsProvider>
        <ThemeProvider theme={light}>{children}</ThemeProvider>
      </SettingsProvider>
    </AuthProvider>
  </ReduxProvider>
);

describe('Login Screen', () => {
  it('should be able to render the component', () => {
    const { getByText } = render(<Login />, { wrapper: Providers });

    const title = getByText('Faça login');
    const description = getByText(
      'Queremos impactar de forma positiva a sua vida e de sua comunidade.'
    );

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });

  it('should be able to press the screen', () => {
    const { getByTestId } = render(<Login />, {
      wrapper: Providers,
    });

    const inputBlurButton = getByTestId('Login.InputBlurButton');
    fireEvent.press(inputBlurButton);
  });

  it('should be able to press the login button', () => {
    const { getByTestId } = render(<Login />, {
      wrapper: Providers,
    });

    const smallButton = getByTestId('Login.SmallButton');
    fireEvent.press(smallButton);
  });

  it('should be able to press the back button', () => {
    const { getByTestId } = render(<Login />, {
      wrapper: Providers,
    });

    const header = getByTestId('Login.Header');
    fireEvent.press(header, 'onBackButton');
  });

  it('should be able to change the values the inputs', () => {
    const { getByPlaceholderText } = render(<Login />, {
      wrapper: Providers,
    });

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Senha');

    fireEvent.changeText(emailInput, 'henrique@test.com');
    fireEvent.changeText(passwordInput, '123456');
  });
});
