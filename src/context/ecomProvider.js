// src/context/EcomProvider.js
"use client";

import { AddressProvider } from "./addressContext";
import { AuthProvider } from "./authContext";
import { CartProvider } from "./cartContext";
import { OrderProvider } from "./orderContext";
import { UserProvider } from "./userContext";

export const EcomProvider = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <CartProvider>
          <OrderProvider>
            <AddressProvider>{children}</AddressProvider>
          </OrderProvider>
        </CartProvider>
      </UserProvider>
    </AuthProvider>
  );
};
