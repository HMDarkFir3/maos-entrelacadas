import { render } from '@testing-library/react-native';

import { TabRoutes } from '@routes/Tab.routes';

describe('Tab Routes', () => {
  it('should be able to render correctly', () => {
    render(<TabRoutes />);
  });
});
