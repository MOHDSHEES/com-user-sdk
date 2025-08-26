// src/services/productServices.js
import { BASE_URL } from "../../../../env";
export const createOrderServices = async ({
  amount,
  currency,
  user_id,
  billing_address,
  shipping_address,
}) => {
  // console.log(productId);
  //   console.log(amount);
  //   console.log(user_id);

  try {
    const res = await fetch(`${BASE_URL}/api/cod/createOrder`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        user_id,
        currency,
        billing_address,
        shipping_address,
      }),
    });
    if (!res.ok) {
      const error = await res.json();
      return { error: error.message };
    }
    const data = await res.json();
    // console.log(data);

    return { data: data };
  } catch (err) {
    // console.log(err);

    return { error: err || "Network/server error" };
  }
};
