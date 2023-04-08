import { ReactNode } from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { store } from '@store/index';

import { AuthProvider } from '@contexts/AuthContext';

import { FontSwitcher } from '@components-of-screens/Settings/components/FontSwitcher';

import { light } from '@themes/light';

const Providers = ({ children }: { children: ReactNode }) => (
  <ReduxProvider store={store}>
    <AuthProvider>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </AuthProvider>
  </ReduxProvider>
);

jest.mock('@hooks/useSettings', () => {
  return {
    useSettings: () => ({
      state: {
        fontSize: {
          name: 'normal',
          value: 'md',
        },
      },
      changeFontSize: jest.fn(),
      fontSizeValue: jest.fn(),
    }),
  };
});

describe('FontSwitcher Component', () => {
  it('should be able to press the open font switcher button', () => {
    const { getByTestId } = render(<FontSwitcher />, { wrapper: Providers });

    const openFontSwitcherButton = getByTestId('FontSwitcher.OpenFontSwitcherButton');

    act(() => {
      fireEvent.press(openFontSwitcherButton);
    });
  });

  it('should be able to press the small font size', () => {
    const { getByTestId, getAllByTestId } = render(<FontSwitcher />, {
      wrapper: Providers,
    });

    const openFontSwitcherButton = getByTestId('FontSwitcher.OpenFontSwitcherButton');

    act(() => {
      fireEvent.press(openFontSwitcherButton);
    });

    const list = getByTestId('FontSwitcher.List');
    expect(list).toBeTruthy();

    const item = getAllByTestId('FontSwitcher.Item');

    act(() => {
      fireEvent.press(item[0]);
    });
  });

  it('should be able to press the medium font size', () => {
    const { getByTestId, getAllByTestId } = render(<FontSwitcher />, {
      wrapper: Providers,
    });

    const openFontSwitcherButton = getByTestId('FontSwitcher.OpenFontSwitcherButton');

    act(() => {
      fireEvent.press(openFontSwitcherButton);
    });

    const list = getByTestId('FontSwitcher.List');
    expect(list).toBeTruthy();

    const item = getAllByTestId('FontSwitcher.Item');

    act(() => {
      fireEvent.press(item[1]);
    });
  });

  it('should be able to press the large font size', () => {
    const { getByTestId, getAllByTestId } = render(<FontSwitcher />, {
      wrapper: Providers,
    });

    const openFontSwitcherButton = getByTestId('FontSwitcher.OpenFontSwitcherButton');

    act(() => {
      fireEvent.press(openFontSwitcherButton);
    });

    const list = getByTestId('FontSwitcher.List');
    expect(list).toBeTruthy();

    const item = getAllByTestId('FontSwitcher.Item');

    act(() => {
      fireEvent.press(item[2]);
    });
  });
});
