'use client';

import { configureStore } from '@reduxjs/toolkit';
import firstSlice from './(reducers)/firstSlice';

export const store = configureStore({
  reducer: {
    first: firstSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;