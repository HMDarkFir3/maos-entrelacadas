import { ReactNode } from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { store } from '@store/index';

import { AuthProvider } from '@contexts/AuthContext';
import { SettingsProvider } from '@contexts/SettingsContext';

import { StepOne } from '@screens/Authentication/Register/StepOne';

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

describe('StepOne Screen', () => {
  it('should be able to render the component', () => {
    const { getByText } = render(<StepOne />, { wrapper: Providers });

    const title = getByText('Crie sua conta!');
    const description = getByText('Vamos começar preenchendo seus dados, começando com seu nome.');

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });

  it('should be able to press the screen', () => {
    const { getByTestId } = render(<StepOne />, {
      wrapper: Providers,
    });

    const inputBlurButton = getByTestId('StepOne.InputBlurButton');
    fireEvent.press(inputBlurButton);
  });

  it('should be able to press the next button', () => {
    const { getByTestId } = render(<StepOne />, {
      wrapper: Providers,
    });

    const smallButton = getByTestId('StepOne.SmallButton');
    fireEvent.press(smallButton);
  });

  it('should be able to press the back button', () => {
    const { getByTestId } = render(<StepOne />, {
      wrapper: Providers,
    });

    const header = getByTestId('StepOne.Header');
    fireEvent.press(header, 'onBackButton');
  });

  it('should be able to change the values the inputs', async () => {
    const { getByTestId } = render(<StepOne />, {
      wrapper: Providers,
    });

    const givenNameInput = getByTestId('StepOne.GivenNameInput');
    const emailInput = getByTestId('StepOne.EmailInput');

    fireEvent.changeText(givenNameInput, 'John Doe');
    fireEvent.changeText(emailInput, 'johndoe@example.com');

    const smallButton = getByTestId('StepOne.SmallButton');
    fireEvent.press(smallButton);
  });
});
