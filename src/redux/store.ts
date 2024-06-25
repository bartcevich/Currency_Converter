import { configureStore } from '@reduxjs/toolkit';
import currencySlice from './currencySlice';

export const store = configureStore({
    reducer: {
        currencys: currencySlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;