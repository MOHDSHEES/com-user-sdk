// src/services/productServices.js
import { BASE_URL } from "../../../env";
export const emptyCartServices = async ({ user_id }) => {
  // console.log(productId);
  //   console.log("in");

  try {
    if (!user_id) {
      return { error: " cart ID is required" };
    }
    const res = await fetch(`${BASE_URL}/api/cart/emptyCart`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user_id,
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
