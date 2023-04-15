import { ReactNode } from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { store } from '@store/index';

import { Settings } from '@screens/Settings';

import { light } from '@themes/light';

const Providers = ({ children }: { children: ReactNode }) => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={light}>{children}</ThemeProvider>
  </ReduxProvider>
);

jest.mock('@hooks/useSettings', () => {
  return {
    useSettings: () => ({
      state: {
        theme: {
          title: 'light',
        },
        fontSize: {
          name: 'normal',
        },
      },
      toggleTheme: jest.fn(),
      fontSizeValue: jest.fn(),
    }),
  };
});

describe('Settings Screen', () => {
  it('should be able to press the theme switcher', () => {
    const { getByText } = render(<Settings />, { wrapper: Providers });

    const themeSwitcher = getByText('Tema escuro');

    act(() => {
      fireEvent(themeSwitcher, 'onSwitchValue');
    });

    render(<Settings />, { wrapper: Providers });

    act(() => {
      fireEvent(themeSwitcher, 'onSwitchValue');
    });
  });

  it('should be able to press the notification switcher', () => {
    const { getByText } = render(<Settings />, { wrapper: Providers });

    const notificationSwitcher = getByText('Receber notificações');

    act(() => {
      fireEvent(notificationSwitcher, 'onSwitchValue');
    });
  });
});
