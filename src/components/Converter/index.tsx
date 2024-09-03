"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";

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

const RIGHT_ANSWER = [
  { value: "выберите валюту", label: "выберите валюту" },
  { value: "RUB", label: "RUB" },
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
];

export default function Converter() {
  const dispatch = useDispatch<AppDispatch>();
  const currency = useSelector<RootState, currencyState>(selectAllCurrency);
  const [purchasePrice1, setPurchasePrice1] = useState(0);
  const [purchasePrice2, setPurchasePrice2] = useState(0);
  const [namePurchasePrice1, setNamePurchasePrice1] = useState("");
  const [namePurchasePrice2, setNamePurchasePrice2] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (e: any) => {
    const enteredAnswer = e.target.value;

    if (enteredAnswer === "RUB") {
      console.log(enteredAnswer);
      setNamePurchasePrice1("USD");
      setPurchasePrice1(Number(currency.salePriceUSD.toFixed(3)));
      setNamePurchasePrice2("EUR");
      setPurchasePrice2(Number(currency.salePriceEUR.toFixed(3)));
    } else if (enteredAnswer === "USD") {
      setNamePurchasePrice1("RUB");
      setPurchasePrice1(Number((1 / currency.salePriceUSD).toFixed(3)));
      setNamePurchasePrice2("EUR");
      setPurchasePrice2(
        Number((currency.purchasePriceEUR / currency.salePriceUSD).toFixed(3))
      );
    } else if (enteredAnswer === "EUR") {
      setNamePurchasePrice1("RUB");
      setPurchasePrice1(Number((1 / currency.salePriceEUR).toFixed(3)));
      setNamePurchasePrice2("USD");
      setPurchasePrice2(
        Number((currency.purchasePriceUSD / currency.salePriceEUR).toFixed(3))
      );
    }
    setAnswer(enteredAnswer);
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.sectionSelect}>
        <h3>Выберите валюту</h3>
        <select
          // className={`formControl ${answer ? "formError" : ""}`}
          onChange={handleAnswerChange}
          value={answer}
          id="contactAnswer"
          name="answer"
          placeholder={answer === "" ? "выберите валюту" : ""}
        >
          {RIGHT_ANSWER.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {answer && (
          <h2>
            1 {namePurchasePrice1} = {purchasePrice1} {answer}.
          </h2>
        )}
        {answer && (
          <h2>
            1 {namePurchasePrice2} = {purchasePrice2} {answer}.
          </h2>
        )}
      </section>
    </div>
  );
}
