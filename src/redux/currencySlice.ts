import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type currencyState = {
  USD: number;
  EUR: number;
};

const initialState: currencyState = {
  USD: 0,
  EUR: 0,
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    updateUsd: (state, action: PayloadAction<number>) => {
      state.USD = action.payload;
    },
    updateEur: (state, action: PayloadAction<number>) => {
      state.EUR = action.payload;
    },
  },
});

export const selectAllCurrency = (state: RootState): currencyState => state.currencys;

export const { updateUsd, updateEur } = currencySlice.actions;
export default currencySlice.reducer;
