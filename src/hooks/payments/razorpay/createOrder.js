// src/server/products/getProductById.ts

import { createOrderServices } from "../../../services/payments/razorpay/createOrderServices";
// import { getProductByIdServices } from "../../services/products/getProductsByIdServices";

export const createOrder = async ({
  amount,
  currency,
  user_id,
  billing_address,
  shipping_address,
}) => {
  const { data, error } = await createOrderServices({
    amount,
    currency,
    user_id,
    billing_address,
    shipping_address,
  });
  // console.log(data);

  if (error) {
    console.log(error);

    throw new Error("Failed to create Order");
  }

  return { data };
};
