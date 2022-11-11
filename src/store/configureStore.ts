/**
 * Create the store with dynamic reducers
 */

import { configureStore } from '@reduxjs/toolkit';

import { createReducer } from './reducers';

export function configureAppStore() {
  return configureStore({
    reducer: createReducer(),
    devTools: process.env.NODE_ENV !== 'production',
  });
}
