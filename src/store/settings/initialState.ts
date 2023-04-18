import { InitialStateSettings } from '@store/settings/types';

import { light } from '@themes/light';

export const initialState: InitialStateSettings = {
  genders: [],
  sawIntroduction: false,
  theme: light,
  fontSize: { name: 'Normal', value: 'md' },
};
