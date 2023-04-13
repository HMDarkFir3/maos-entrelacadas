import { DefaultTheme } from 'styled-components/native';

import { GenderDTO } from '@dtos/GenderDTO';

export interface FontSizeData {
  name: 'Pequeno' | 'Normal' | 'Grande';
  value: 'sm' | 'md' | 'lg';
}

export interface InitialStateData {
  genders: GenderDTO.Response[];
  sawIntroduction: boolean;
  theme: DefaultTheme;
  fontSize: FontSizeData;
}
