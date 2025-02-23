import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../../types/TStore';

const selfGeneral = (state: RootState) => state.user;


export const accessTokenSelector = createSelector(
  [selfGeneral],
  ({ accessToken }) => accessToken,
);

export const userSelector = createSelector(
  [selfGeneral],
  ({ userId, currentUser }) => ({ userId, currentUser }),
);
