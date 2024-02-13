'use client';

import { createSlice } from "@reduxjs/toolkit";

export interface firstSlice {
  tab: number;
}

const initialState = {
  tab: 45714,
};

export const firstSlice = createSlice({
  name: 'first',
  initialState,
  reducers: {
    setTab: (state, action) => {
      state.tab = action.payload;
    },
  }
});

export const { setTab } = firstSlice.actions;

export default firstSlice.reducer;

