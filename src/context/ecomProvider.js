// src/context/EcomProvider.js
"use client";

import { AddressProvider } from "./addressContext";
import { CartProvider } from "./cartContext";

export const EcomProvider = ({ children }) => {
  return (
    <CartProvider>
      <AddressProvider>{children}</AddressProvider>
    </CartProvider>
  );
};
