'use client';

import { createSlice } from "@reduxjs/toolkit";

export interface firstSlice {
  tab: number;
  sort: string;
}
const initialState = {
  tab: 45714,
  sort: typeof window !== 'undefined' ? window.localStorage.getItem('sushiSort') : 'Default',
};

export const firstSlice = createSlice({
  name: 'first',
  initialState,
  reducers: {
    setTab: (state, action) => {
      state.tab = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  }
});

export const { setTab, setSort } = firstSlice.actions;

export default firstSlice.reducer;

