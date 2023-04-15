import { render } from '@testing-library/react-native';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '@store/index';

import { SettingsProvider } from '@contexts/SettingsContext';

import { Routes } from '@routes/index.routes';

describe('Routes', () => {
  it('should be able to render correctly', () => {
    render(
      <ReduxProvider store={store}>
        <SettingsProvider>
          <Routes />
        </SettingsProvider>
      </ReduxProvider>
    );
  });
});
