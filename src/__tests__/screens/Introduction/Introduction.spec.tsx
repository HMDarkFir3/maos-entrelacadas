import { ReactNode } from 'react';
import { Alert } from 'react-native';
import { fireEvent, render, act } from '@testing-library/react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { store } from '@store/index';

import { AuthProvider } from '@contexts/AuthContext';
import { SettingsProvider } from '@contexts/SettingsContext';

import { Introduction } from '@screens/Introduction';

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

describe('Introduction Screen', () => {
  it('should be able to render the component correctly', () => {
    render(<Introduction />, { wrapper: Providers });
  });

  it('should be able to press the jump button', () => {
    const alertMock = jest.spyOn(Alert, 'alert');

    const { getByTestId } = render(<Introduction />, { wrapper: Providers });

    const jumpButton = getByTestId('Introduction.JumpButton');

    act(() => {
      fireEvent.press(jumpButton);
    });

    expect(alertMock).toHaveBeenCalledWith('Pular Introdução!', 'Deseja pular a introdução?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        style: 'default',
        onPress: expect.any(Function),
      },
    ]);

    act(() => {
      const alertButtons = alertMock.mock.calls[0][2];
      const alertButton = alertButtons?.find((button) => button.text === 'Sim');
      if (alertButton) {
        if (alertButton.onPress) {
          alertButton.onPress();
        }
      } else {
        throw new Error('Alert button not found');
      }
    });
  });

  it('should be able to press the next button', () => {
    const viewableItemsMock = [
      {
        index: 0,
        item: {
          id: '1',
        },
      },
      {
        index: 1,
        item: {
          id: '2',
        },
      },
      {
        index: 2,
        item: {
          id: '3',
        },
      },
      {
        index: 3,
        item: {
          id: '4',
        },
      },
    ];

    const { getByTestId } = render(<Introduction />, { wrapper: Providers });

    const flatList = getByTestId('Introduction.FlatList');
    expect(flatList).toBeTruthy();

    act(() => {
      flatList.props.onViewableItemsChanged({
        viewableItems: viewableItemsMock,
      });
    });

    const smallButton = getByTestId('Introduction.SmallButton');

    act(() => {
      fireEvent.press(smallButton);
    });
  });
});
