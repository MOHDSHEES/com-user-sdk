// src/server/products/getProductById.ts

import { addToCartServices } from "../../services/cart/addToCartServices";
// import { useCartContext } from "../../context";

export const addToCart = async ({ userId, productId, qty, variationIds }) => {
  // const { fetchCart } = useCartContext();
  const { data, error } = await addToCartServices({
    userId,
    productId,
    qty,
    variationIds,
  });
  // if (!error) {
  //   // console.log("in addtocart");

  //   fetchCart(userId);
  // }
  if (error) {
    throw new Error(error || "Failed to add product");
  }

  return data;
};
