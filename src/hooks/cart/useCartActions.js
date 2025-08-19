// src/sdk/hooks/useCartActions.js
"use client";

import { useCartContext } from "../../context"; // adjust import path as needed
import { addToCartServices } from "../../services/cart/addToCartServices";
import { removeFromCartServices } from "../../services/cart/removeFromCartServices";
import { updateCartServices } from "../../services/cart/updateCartItemServices";
import { emptyCartServices } from "../../services/cart/emptyCartServices";

export const useCartActions = () => {
  const {
    fetchCart,
    deleteProductInCartContext,
    updateQuantityInCartContext,
    emptyCartContext,
  } = useCartContext();

  const addToCart = async ({ userId, productId, qty, variationIds }) => {
    const { data, error } = await addToCartServices({
      userId,
      productId,
      qty,
      variationIds,
    });
    if (error) throw new Error(error);

    // Optionally refetch entire cart to keep fresh:
    await fetchCart({ userId });

    // Or update context directly:
    // addProductInCartContext(data);

    return data;
  };

  const removeFromCart = async ({ cart_id }) => {
    const { data, error } = await removeFromCartServices({ cart_id });
    if (error) throw new Error(error);

    deleteProductInCartContext(cart_id);

    // Optionally:
    // await fetchCart({ userId });

    return data;
  };

  const updateQuantity = async ({ cart_id, quantity }) => {
    const { data, error } = await updateCartServices({
      cart_id,
      quantity,
    });
    if (error) throw new Error(error);

    updateQuantityInCartContext(cart_id, quantity);

    // Optionally:
    // await fetchCart({ userId });

    return data;
  };

  const emptyCart = async ({ user_id }) => {
    // console.log("in sd");

    const { data, error } = await emptyCartServices({
      user_id,
    });
    if (error) throw new Error(error);

    emptyCartContext();

    // Optionally:
    // await fetchCart({ userId });

    return data;
  };
  return {
    addToCart,
    removeFromCart,
    updateQuantity,
    emptyCart,
  };
};
