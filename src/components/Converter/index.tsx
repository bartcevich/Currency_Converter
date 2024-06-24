"use client";
import React, { useState, useEffect, useCallback } from "react";
import styles from "./styles.module.scss";

import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { updateUsd, updateEur, selectAllFoods } from "@/redux/foodsSlice";

type foodsState = {
  USD: number;
  EUR: number;
};

export default function Converter() {
  const dispatch = useDispatch<AppDispatch>();
  const foods = useSelector<RootState, foodsState>(selectAllFoods);
  const exchangeRate = 1.07;

  const handleUsdChange = (usdValue: any) => {
    dispatch(updateUsd(parseFloat(usdValue)));
    dispatch(updateEur(parseFloat((usdValue * exchangeRate).toFixed(2))));
  };

  const handleEurChange = (eurValue: any) => {
    dispatch(updateEur(parseFloat(eurValue)));
    dispatch(updateUsd(parseFloat((eurValue / exchangeRate).toFixed(2))));
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.sectionUsd}>
        <label htmlFor="usdInput">USD</label>
        <input
          type="number"
          id="usdInput"
          value={foods.USD}
          onChange={(e) => handleUsdChange(e.target.value)}
        />
      </section>
      <section className={styles.sectionEur}>
        <label htmlFor="eurInput">EUR</label>
        <input
          type="number"
          id="eurInput"
          value={foods.EUR}
          onChange={(e) => handleEurChange(e.target.value)}
        />
      </section>
    </div>
  );
}
