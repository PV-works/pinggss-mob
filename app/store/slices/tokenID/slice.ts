import { createAction, createSlice } from '@reduxjs/toolkit';

import { ICognitoIdTokenStore } from './interfaces/ITokenStore';

export const logout = createAction('logout');

export const initialState: ICognitoIdTokenStore = {
  idToken: '',
};

export const cognitoIdTokenSlice = createSlice({
  name: 'cognitoIdToken',
  initialState,
  reducers: {
    setCognitoIdToken(state, { payload }) {
      state.idToken = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState;
    });
  },
});

export const { setCognitoIdToken } = cognitoIdTokenSlice.actions;

export default cognitoIdTokenSlice.reducer;
