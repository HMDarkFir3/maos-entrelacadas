import { render } from '@testing-library/react-native';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '@store/index';

import { SettingsProvider } from '@contexts/SettingsContext';

import { AuthRoutes } from '@routes/Auth.routes';

describe('Auth Routes', () => {
  it('should be able to render correctly', () => {
    render(
      <ReduxProvider store={store}>
        <SettingsProvider>
          <AuthRoutes />
        </SettingsProvider>
      </ReduxProvider>
    );
  });
});
