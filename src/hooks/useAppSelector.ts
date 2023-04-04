import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from '@store/types';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
