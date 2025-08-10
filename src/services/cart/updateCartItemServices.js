// src/services/productServices.js
import { BASE_URL } from "../../../env";
export const updateCartServices = async ({ cart_id, quantity }) => {
  // console.log(productId);

  try {
    if (!cart_id) {
      return { error: "cart ID are required" };
    }
    const res = await fetch(`${BASE_URL}/api/cart/updateItem`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cart_id: cart_id,
        newQuantity: quantity,
      }),
    });
    // console.log(res);

    if (!res.ok) {
      const error = await res.json();
      return { error: error.message };
    }
    const data = await res.json();

    return { data };
  } catch (err) {
    return { error: err };
  }
};
