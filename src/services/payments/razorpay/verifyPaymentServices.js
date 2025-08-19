// src/services/productServices.js
import { BASE_URL } from "../../../../env";
export const verifyOrderServices = async ({
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature,
}) => {
  // console.log(productId);

  try {
    const res = await fetch(`${BASE_URL}/api/razorpay/verifyPayment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      }),
    });
    if (!res.ok) {
      const error = await res.json();
      return { error: error.message };
    }
    const data = await res.json();

    return { data };
  } catch (err) {
    console.log(err);

    return { error: "Network/server error" };
  }
};
