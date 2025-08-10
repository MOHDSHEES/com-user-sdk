// src/services/productServices.js
import { BASE_URL } from "../../../env";
export const addToCartServices = async ({
  userId,
  productId,
  qty = 1,
  variationIds = [],
}) => {
  // console.log(productId);

  try {
    if (!userId || !productId) {
      return { error: "User ID and Product ID are required" };
    }
    const res = await fetch(`${BASE_URL}/api/cart/addToCart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        product_id: productId,
        quantity: qty,
        variation_ids: variationIds,
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
