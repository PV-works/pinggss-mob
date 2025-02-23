import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../../types/TStore';

const selfGeneral = (state: RootState) => state.general;

export const appSelector = createSelector(
  [selfGeneral],
  ({ isDisconnected, isBootSplashPassed }) => ({
    isDisconnected, isBootSplashPassed,
  }),
);
