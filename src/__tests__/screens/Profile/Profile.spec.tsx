import { ReactNode } from 'react';
import { Alert } from 'react-native';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { store } from '@store/index';

import { AuthProvider } from '@contexts/AuthContext';
import { SettingsProvider } from '@contexts/SettingsContext';

import { Profile } from '@screens/Profile';

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

describe('Profile Screen', () => {
  it('should be able to render the component correctly', () => {
    const { getByText } = render(<Profile />, { wrapper: Providers });

    const eventsTitle = getByText('Eventos');
    expect(eventsTitle).toBeTruthy();
  });

  it('should be able to navigate to Settings screen', () => {
    const { getByTestId } = render(<Profile />, { wrapper: Providers });

    const settingsButton = getByTestId('Profile.Settings');
    fireEvent.press(settingsButton);
  });

  it('should be able to press log out button and show the alert ', () => {
    const alertMock = jest.spyOn(Alert, 'alert');

    const { getByTestId } = render(<Profile />, { wrapper: Providers });

    const logOutButton = getByTestId('Profile.LogOut');
    fireEvent.press(logOutButton);

    expect(alertMock).toHaveBeenCalledWith(
      'Sair',
      'Deseja sair da aplicação?',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: expect.any(Function),
        },
      ],
      { cancelable: true }
    );

    const alertButtons = alertMock.mock.calls[0][2];
    const alertButton = alertButtons?.find((button) => button.text === 'Sim');

    act(() => {
      if (alertButton) {
        if (alertButton.onPress) {
          alertButton.onPress();
        }
      } else {
        throw new Error('Alert button not found');
      }
    });
  });
});
