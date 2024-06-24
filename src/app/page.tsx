"use client";
import React, { useState, useEffect } from "react";
import Converter from "@/components/Converter";
import { MenuProvider } from "@/context/IngredientsContext";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Converter />
    </Provider>
  );
}
