// src/server/products/getProductById.ts

// import { useCartContext } from "../../context/cartContext";
import { updateCartServices } from "../../services/cart/updateCartItemServices";

export const updateCart = async ({ cart_id, quantity }) => {
  //   const { deleteProductInCart } = useCartContext();
  const { data, error } = await updateCartServices({
    cart_id,
    quantity,
  });
  if (error) {
    throw new Error(error || "Failed to update product in cart");
  }
  //   deleteProductInCart(cart_id);
  return data;
};
