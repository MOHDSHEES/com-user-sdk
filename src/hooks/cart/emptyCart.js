// src/server/products/getProductById.ts

import { emptyCartServices } from "../../services/cart/emptyCartServices";

export const emptyCart = async ({ userId }) => {
  // const { fetchCart } = useCartContext();
  const { data, error } = await emptyCartServices({
    userId,
  });
  // if (!error) {
  //   // console.log("in addtocart");

  //   fetchCart(userId);
  // }
  if (error) {
    throw new Error(error || "Failed to remove products from cart");
  }

  return data;
};
