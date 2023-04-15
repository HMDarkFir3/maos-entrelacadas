import { store } from '@store/index';
import { selectFontSize } from '@store/settings/slice';

export const fontSizeValue = (value: number) => {
  const fontSize = selectFontSize(store.getState());

  console.log(fontSize);

  switch (fontSize.value) {
    case 'sm': {
      return value * 0.8;
    }
    case 'md': {
      return value;
    }
    case 'lg': {
      return value * 1.2;
    }
    default: {
      return value;
    }
  }
};
