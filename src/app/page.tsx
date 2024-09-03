"use client";
import React, { useState, useEffect } from "react";
import Converter from "@/components/Converter";
import CurrencyPrice from "@/components/CurrencyPrice/currencyPrice";
// import { Provider } from "react-redux";
// import { store } from "@/redux/store";

export default function Home() {
  return (
    <>
      <Converter />
      <CurrencyPrice />
    </>
  );
}
