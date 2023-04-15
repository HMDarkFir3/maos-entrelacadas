import { ReactNode } from 'react';
import { render } from '@testing-library/react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { store } from '@store/index';

import { SettingsProvider } from '@contexts/SettingsContext';

import { UserInfo } from '@screens/UserInfo';

import { light } from '@themes/light';

const Providers = ({ children }: { children: ReactNode }) => (
  <ReduxProvider store={store}>
    <SettingsProvider>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </SettingsProvider>
  </ReduxProvider>
);

describe('UserInfo Screen', () => {
  it('should be able to render the component correctly', () => {
    render(<UserInfo />, { wrapper: Providers });
  });
});
