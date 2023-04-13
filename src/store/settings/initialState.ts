import { InitialStateData } from '@store/settings/types';

import { light } from '@themes/light';

export const initialState: InitialStateData = {
  genders: [],
  sawIntroduction: false,
  theme: light,
  fontSize: { name: 'Normal', value: 'md' },
};
