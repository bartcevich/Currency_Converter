import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type foodsState = {
  USD: number;
  EUR: number;
};

const initialState: foodsState = {
  USD: 0,
  EUR: 0,
};

export const foodsSlice = createSlice({
  name: "food",
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

export const selectAllFoods = (state: RootState): foodsState => state.foods;

export const { updateUsd, updateEur } = foodsSlice.actions;
export default foodsSlice.reducer;
