// src/server/products/getProductById.ts

import { getCartItemsServices } from "../../services/cart/getCartItemsServices";

// import { getCartItemsServices } from "@/services/cart/getCartItemsServices";

export const getCartItems = async ({ userId }) => {
  //   console.log("in");

  const { data, error } = await getCartItemsServices({
    userId,
  });

  if (error) {
    throw new Error(error || "Failed to fetch products");
  }

  return data;
};
