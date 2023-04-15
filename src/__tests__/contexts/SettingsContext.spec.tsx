import { ReactNode } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { render, waitFor, act, fireEvent } from '@testing-library/react-native';
import { Provider as ReduxProvider } from 'react-redux';

import { useAppDispatch } from '@hooks/useAppDispatch';

import { store } from '@store/index';
import { changeFontSize } from '@store/settings/actions';
import { FontSizeData } from '@store/settings/types';

import { SettingsProvider } from '@contexts/SettingsContext';

import { useSettings } from '@hooks/useSettings';

const Providers = ({ children }: { children: ReactNode }) => (
  <ReduxProvider store={store}>
    <SettingsProvider>{children}</SettingsProvider>
  </ReduxProvider>
);

describe('SettingsContext', () => {
  const ComponentMock = () => {
    const dispatch = useAppDispatch();
    const { fontSizeValue } = useSettings();

    const dataMock = [
      {
        name: 'Pequeno',
        value: 'sm',
      },
      {
        name: 'Normal',
        value: 'md',
      },
      {
        name: 'Grande',
        value: 'lg',
      },
    ];

    return (
      <View>
        <Text style={{ fontSize: fontSizeValue(20) }}>Test</Text>

        <FlatList
          data={dataMock}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Button
              title={item.name}
              onPress={() => {
                const formmattedValue = {
                  name: item.name,
                  value: item.value,
                };

                dispatch(changeFontSize(formmattedValue as FontSizeData));
              }}
            />
          )}
        />
      </View>
    );
  };

  it('should be able to render correctly', () => {
    const { getByText } = render(<ComponentMock />, { wrapper: Providers });
    expect(getByText('Test')).toBeTruthy();
  });

  it('should be able to press the change font size', () => {
    const { getByText } = render(<ComponentMock />, { wrapper: Providers });

    const smallFontSize = getByText('Pequeno');
    const normalFontSize = getByText('Normal');
    const largeFontSize = getByText('Grande');

    waitFor(() => {
      act(() => {
        fireEvent.press(smallFontSize);
      });

      act(() => {
        fireEvent.press(normalFontSize);
      });

      act(() => {
        fireEvent.press(largeFontSize);
      });
    });

    render(<ComponentMock />, { wrapper: Providers });
  });
});
