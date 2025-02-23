import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import IGeneralStore from './interfaces/IGeneralStore';


export const initialState: IGeneralStore = {
  isDisconnected: false,
  isBootSplashPassed: false,
  loading: false,
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setGeneralState: (state, action: PayloadAction<Partial<IGeneralStore>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setGeneralState } = generalSlice.actions;

export default generalSlice.reducer;
