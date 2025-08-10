// src/services/productServices.js
import { BASE_URL } from "../../../env";
export const removeFromCartServices = async ({ cart_id }) => {
  // console.log(productId);

  try {
    if (!cart_id) {
      return { error: " cart ID is required" };
    }
    const res = await fetch(`${BASE_URL}/api/cart/removeItem`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cart_id: cart_id,
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
