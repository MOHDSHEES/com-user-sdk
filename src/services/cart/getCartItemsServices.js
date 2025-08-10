// src/services/productServices.js
import { BASE_URL } from "../../../env";
export const getCartItemsServices = async ({ userId }) => {
  //   console.log(userId);

  try {
    if (!userId) {
      return { error: "User ID is required" };
    }
    const res = await fetch(`${BASE_URL}/cart/getCartItems`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
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
