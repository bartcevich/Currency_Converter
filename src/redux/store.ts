import { configureStore } from '@reduxjs/toolkit';
import foodsSlice from './foodsSlice';

export const store = configureStore({
    reducer: {
        foods: foodsSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;