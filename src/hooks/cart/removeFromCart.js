// src/server/products/getProductById.ts

// import { useCartContext } from "../../context/cartContext";
import { removeFromCartServices } from "../../services/cart/removeFromCartServices";

export const removeFromCart = async ({ cart_id }) => {
  //   const { deleteProductInCart } = useCartContext();
  const { data, error } = await removeFromCartServices({
    cart_id,
  });
  if (error) {
    throw new Error(error || "Failed to remove product from cart");
  }
  //   deleteProductInCart(cart_id);
  return data;
};
