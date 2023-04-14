import { ReactNode } from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { store } from '@store/index';

import { AuthProvider } from '@contexts/AuthContext';
import { SettingsProvider } from '@contexts/SettingsContext';

import { StepTwo } from '@screens/Authentication/Register/StepTwo';

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

describe('StepTwo Screen', () => {
  it('should be able to render the component', () => {
    const { getByText } = render(<StepTwo />, { wrapper: Providers });

    const title = getByText('Crie sua conta!');
    const description = getByText('Selecione seu gênero e preecha sua data de nascimento.');

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });

  it('should be able to press the screen', () => {
    const { getByTestId } = render(<StepTwo />, {
      wrapper: Providers,
    });

    const inputBlurButton = getByTestId('StepTwo.InputBlurButton');
    fireEvent.press(inputBlurButton);
  });

  it('should be able to press the next button', () => {
    const { getByTestId } = render(<StepTwo />, {
      wrapper: Providers,
    });

    const smallButton = getByTestId('StepTwo.SmallButton');
    fireEvent.press(smallButton);
  });

  it('should be able to press the back button', () => {
    const { getByTestId } = render(<StepTwo />, {
      wrapper: Providers,
    });

    const header = getByTestId('StepTwo.Header');
    fireEvent.press(header, 'onBackButton');
  });

  it('should be able to select a gender, birthdate and inputs', () => {
    const { getByText, getByTestId } = render(<StepTwo />, {
      wrapper: Providers,
    });

    const genderInput = getByText('Gênero');
    fireEvent.press(genderInput);

    // const genderSelected = getByText('Outro');
    // fireEvent.press(genderSelected);

    const birthdateInput = getByText('Data de Nascimento');
    fireEvent.press(birthdateInput);

    const dateTimePickerModal = getByTestId('StepTwo.DatePicker');

    expect(dateTimePickerModal).toBeTruthy();

    fireEvent(dateTimePickerModal, 'onConfirm', new Date());

    const passwordInput = getByTestId('StepTwo.PasswordInput');
    fireEvent.changeText(passwordInput, '123456');

    const confirmPasswordInput = getByTestId('StepTwo.ConfirmPasswordInput');
    fireEvent.changeText(confirmPasswordInput, '123456');

    const smallButton = getByTestId('StepTwo.SmallButton');
    fireEvent.press(smallButton);
  });
});
