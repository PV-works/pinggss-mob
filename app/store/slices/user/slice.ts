import {createAction, createSlice} from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import type IUser from './interfaces/IUser';

export const logout = createAction('logout');

export const initialState: IUser = {
  accessToken: undefined,
  userId: '',
  currentUser: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, { payload }) {
      state.accessToken = payload;
    },
    setUserState: (state, action: PayloadAction<Partial<IUser>>) => {
      Object.assign(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState;
    });
  },
});

export const {
  setToken, setUserState,
} = userSlice.actions;

export default userSlice.reducer;
