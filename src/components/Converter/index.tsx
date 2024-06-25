"use client";
import React, { useState, useEffect, useCallback } from "react";
import styles from "./styles.module.scss";

import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { updateUsd, updateEur, selectAllCurrency } from "@/redux/currencySlice";

type currencyState = {
  USD: number;
  EUR: number;
};

export default function Converter() {
  const dispatch = useDispatch<AppDispatch>();
  const currency = useSelector<RootState, currencyState>(selectAllCurrency);
  const exchangeRate = 1.07;

  const handleUsdChange = (usdValue: string) => {
    const usdNumber: number = parseFloat(usdValue);
    dispatch(updateUsd(usdNumber));
    dispatch(updateEur(parseFloat((usdNumber * exchangeRate).toFixed(2))));
  };

  const handleEurChange = (eurValue: string) => {
    const eurNumber: number = parseFloat(eurValue);
    dispatch(updateEur(eurNumber));
    dispatch(updateUsd(parseFloat((eurNumber / exchangeRate).toFixed(2))));
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.sectionUsd}>
        <label htmlFor="usdInput">USD</label>
        <input
          type="number"
          id="usdInput"
          value={currency.USD}
          onChange={(e) => handleUsdChange(e.target.value)}
        />
      </section>
      <section className={styles.sectionEur}>
        <label htmlFor="eurInput">EUR</label>
        <input
          type="number"
          id="eurInput"
          value={currency.EUR}
          onChange={(e) => handleEurChange(e.target.value)}
        />
      </section>
    </div>
  );
}
