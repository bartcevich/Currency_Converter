import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type currencyState = {
  USD: number;
  EUR: number;
  salePriceUSD: number;
  purchasePriceUSD: number;
  salePriceEUR: number;
  purchasePriceEUR: number;
};

const initialState: currencyState = {
  USD: 0,
  EUR: 0,
  salePriceUSD: 0,
  purchasePriceUSD: 0,
  salePriceEUR: 0,
  purchasePriceEUR: 0,
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
    updatePurchaseUsd: (state, action: PayloadAction<number>) => {
      state.purchasePriceUSD = action.payload;
    },
    updatePurchaseEur: (state, action: PayloadAction<number>) => {
      state.purchasePriceEUR = action.payload;
    },
    updateSaleUsd: (state, action: PayloadAction<number>) => {
      state.salePriceUSD = action.payload;
    },
    updateSaleEur: (state, action: PayloadAction<number>) => {
      state.salePriceEUR = action.payload;
    },
  },
});

export const selectAllCurrency = (state: RootState): currencyState => state.currencys;

export const { updateUsd, updateEur, updatePurchaseEur, updatePurchaseUsd, updateSaleEur, updateSaleUsd } = currencySlice.actions;
export default currencySlice.reducer;
