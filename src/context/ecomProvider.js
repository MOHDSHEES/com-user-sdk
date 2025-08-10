// src/context/EcomProvider.js
"use client";

import { CartProvider } from "./cartContext";

export const EcomProvider = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};
