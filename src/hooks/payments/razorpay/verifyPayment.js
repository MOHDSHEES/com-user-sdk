// src/server/products/getProductById.ts

import { verifyOrderServices } from "../../../services/payments/razorpay/verifyPaymentServices";

export const verifyPayment = async ({
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature,
}) => {
  const { data, error } = await verifyOrderServices({
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  });

  if (error) {
    console.log(error);

    throw new Error("Failed to create Order");
  }

  return data;
};
