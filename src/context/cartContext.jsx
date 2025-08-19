// src/context/ProductsContext.js
"use client";
import { getCartItemsServices } from "../services/cart/getCartItemsServices";
import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCart = useCallback(async ({ userId }) => {
    setLoading(true);
    // console.log("in");

    const { data, error } = await getCartItemsServices({
      userId,
    });
    if (data) {
      setCart(data.data || []);
      setError(null);
    } else {
      setError(error);
    }
    setLoading(false);
  }, []);
  const addProductInCartContext = (newProduct) => {
    setCart((prev) => [newProduct, ...prev]);
  };
  const editProductInCartContext = (updatedProduct) => {
    setCart((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };
  const updateQuantityInCartContext = (cart_id, newQuantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === cart_id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  // Delete a product by id and decrement total count
  const deleteProductInCartContext = (cart_id) => {
    setCart((prev) => prev.filter((p) => p.id !== cart_id));
    // setPagination((prev) => ({ ...prev, total: Math.max(prev.total - 1, 0) }));
  };
  const emptyCartContext = () => {
    setCart([]);
    // setPagination((prev) => ({ ...prev, total: Math.max(prev.total - 1, 0) }));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        error,
        addProductInCartContext,
        deleteProductInCartContext,
        editProductInCartContext,
        updateQuantityInCartContext,
        emptyCartContext,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
