"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import CurrencyPrice from "../CurrencyPrice/currencyPrice";

import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { updateUsd, updateEur, selectAllCurrency } from "@/redux/currencySlice";

type currencyState = {
  USD: number;
  EUR: number;
  salePriceUSD: number;
  purchasePriceUSD: number;
  salePriceEUR: number;
  purchasePriceEUR: number;
};

export default function Converter() {
  const dispatch = useDispatch<AppDispatch>();
  const currency = useSelector<RootState, currencyState>(selectAllCurrency);
  const exchangeRate = 1.07;
  const [notValidValue, setNotValidValue] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [conversion1, setConversion1] = useState(1);
  const [conversion2, setConversion2] = useState(1);

  const RIGHT_ANSWER = [
    { value: "RUB", conversionRate: 1, label: "RUB" },
    { value: "USD", conversionRate: currency.purchasePriceUSD, label: "USD" },
    { value: "EUR", conversionRate: currency.purchasePriceEUR, label: "EUR" },
  ];

  function validateValue(value: string): boolean {
    if (value.includes(".") && value.split(".")[1].length > 2) {
      return false;
    }
    const testSymbol = value.slice(-1);
    const validSymbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    if (!validSymbols.includes(testSymbol)) {
      return false;
    }
    return true;
  }

  const handleUsdChange = (usdValue: string) => {
    if (usdValue.length === 0 && usdValue === "") {
      usdValue = "0";
    }
    if (validateValue(usdValue)) {
      console.log("f usd=", usdValue, conversion1, conversion2);
      const usdNumber: number = parseFloat(usdValue);
      dispatch(updateUsd(usdNumber));
      dispatch(
        updateEur(
          parseFloat(((usdNumber * conversion1) / conversion2).toFixed(2))
        )
      );
      setNotValidValue("");
    } else {
      setNotValidValue("введено не допустимое значение");
    }
  };

  const handleEurChange = (eurValue: string) => {
    if (eurValue.length === 0 && eurValue === "") {
      eurValue = "0";
    }
    if (validateValue(eurValue)) {
      console.log("f usd=", eurValue, conversion1, conversion2);
      const eurNumber: number = parseFloat(eurValue);
      dispatch(updateEur(eurNumber));
      dispatch(
        updateUsd(
          parseFloat(((eurNumber * conversion2) / conversion1).toFixed(2))
        )
      );
      setNotValidValue("");
    } else {
      setNotValidValue("введено не допустимое значение");
    }
  };

  const handleAnswerChange = (e: any) => {
    const selectedValue = e.target.value;
    setAnswer1(selectedValue);
    const selectedOption = RIGHT_ANSWER.find(
      (option) => option.value === selectedValue
    );
    if (selectedOption) {
      setConversion1(selectedOption.conversionRate);
    }
    console.log("2=", conversion1);
    handleEurChange("0");
  };

  const handleAnswerChange2 = (e: any) => {
    const selectedValue = e.target.value;
    setAnswer2(selectedValue);
    const selectedOption = RIGHT_ANSWER.find(
      (option) => option.value === selectedValue
    );
    if (selectedOption) {
      setConversion2(selectedOption.conversionRate);
    }
    console.log("2=", conversion2);
    handleUsdChange("0");
  };

  return (
    <div className={styles.wrapper}>
      <CurrencyPrice />
      <section className={styles.sectionUsd}>
        <select
          onChange={handleAnswerChange}
          value={answer1}
          id="contactAnswer"
          name="answer"
        >
          {RIGHT_ANSWER.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* <label htmlFor="usdInput">
          {currency.salePriceUSD}USD{currency.purchasePriceUSD}
        </label> */}
        <input
          type="number"
          id="usdInput"
          value={currency.USD}
          onChange={(e) => handleUsdChange(e.target.value)}
        />
        {!!notValidValue && (
          <p className={styles.invalidValue}>{notValidValue}</p>
        )}
      </section>
      <section className={styles.sectionEur}>
        <select
          onChange={handleAnswerChange2}
          value={answer2}
          id="contactAnswer"
          name="answer"
        >
          {RIGHT_ANSWER.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* <label htmlFor="eurInput">
          {currency.salePriceEUR}EUR{currency.purchasePriceEUR}
        </label> */}
        <input
          type="number"
          id="eurInput"
          value={currency.EUR}
          onChange={(e) => handleEurChange(e.target.value)}
        />
        <p>{!!notValidValue && <>{notValidValue}</>}</p>
      </section>
    </div>
  );
}
