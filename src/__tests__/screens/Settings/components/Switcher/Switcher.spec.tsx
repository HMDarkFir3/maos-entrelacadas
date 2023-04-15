import { ReactNode } from 'react';
import { render } from '@testing-library/react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { Activity } from 'phosphor-react-native';

import { store } from '@store/index';

import { SettingsProvider } from '@contexts/SettingsContext';

import { Switcher } from '@components-of-screens/Settings/components/Switcher';

import { light } from '@themes/light';

const Providers = ({ children }: { children: ReactNode }) => (
  <ReduxProvider store={store}>
    <SettingsProvider>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </SettingsProvider>
  </ReduxProvider>
);

describe('Switcher Component', () => {
  it('should be able to render when the component is falsy', () => {
    const onSwitchValueMock = jest.fn();
    const switchValueMock = false;

    render(
      <Switcher
        icon={() => <Activity />}
        onSwitchValue={onSwitchValueMock}
        switchValue={switchValueMock}
        title="Font Switcher"
      />,
      { wrapper: Providers }
    );
  });

  it('should be able to render when the component is truthy', () => {
    const onSwitchValueMock = jest.fn();
    const switchValueMock = true;

    render(
      <Switcher
        icon={() => <Activity />}
        onSwitchValue={onSwitchValueMock}
        switchValue={switchValueMock}
        title="Font Switcher"
      />,
      { wrapper: Providers }
    );
  });
});
