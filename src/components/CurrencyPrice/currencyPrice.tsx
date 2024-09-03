"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePurchaseUsd,
  updateSaleUsd,
  updatePurchaseEur,
  updateSaleEur,
  selectAllCurrency,
} from "@/redux/currencySlice";

export default function CurrencyPrice() {
  //   const currency = useSelector<RootState, currencyState>(selectAllCurrency);
  const [allCurrencyPrice, setAllCurrencyPrice] = useState({});
  const dispatch = useDispatch<AppDispatch>();

  // if(currency.priceUSD === )
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.cbr-xml-daily.ru/daily_json.js"
        );
        const data = await response.json();
        setAllCurrencyPrice(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const dataForComponent = () => {
    const data: any = allCurrencyPrice;
    const dataKayValute = data["Valute"] || {};
    dispatch(updatePurchaseUsd(dataKayValute.USD.Value));
    dispatch(updateSaleUsd(dataKayValute.USD.Previous));
    dispatch(updatePurchaseEur(dataKayValute.EUR.Value));
    dispatch(updateSaleEur(dataKayValute.EUR.Previous));
    // console.log(dataKayValute, dataKayValute.USD.Value);
  };

  useEffect(() => {
    if (
      typeof allCurrencyPrice === "object" &&
      allCurrencyPrice !== null &&
      Object.keys(allCurrencyPrice).length > 0
    ) {
      dataForComponent();
    }
  }, [allCurrencyPrice]);

  return <div></div>;
}
