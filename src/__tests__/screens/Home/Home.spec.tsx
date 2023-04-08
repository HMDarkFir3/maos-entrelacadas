import { ReactNode } from 'react';
import { render } from '@testing-library/react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { store } from '@store/index';

import { AuthProvider } from '@contexts/AuthContext';
import { SettingsProvider } from '@contexts/SettingsContext';

import { Home } from '@screens/Home';

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

describe('Home Screen', () => {
  it('should be able to render the component', () => {
    render(<Home />, { wrapper: Providers });
  });
});
