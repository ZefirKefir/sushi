'use client';

import { createSlice } from "@reduxjs/toolkit";

export interface firstSlice {
  tab: number;
  sort: string;
}
const initialState = {
  tab: typeof window.localStorage.getItem('tab') !== undefined ? Number(window.localStorage.getItem('tab')) : 45714,
  sort: typeof window.localStorage.getItem('sushiSort') !== undefined ? window.localStorage.getItem('sushiSort') : 'loading...',
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

