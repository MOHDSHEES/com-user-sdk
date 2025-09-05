// src/server/products/getProductById.ts

import { updateOrderStatusServices } from "../../services/orders/updateOrderStatusServices";

// import { getOrderServices } from "../../services/orders/getOrderServices";

export const updateOrderStatus = async ({
  order_id,
  status,
  payment_status,
} = {}) => {
  //   console.log("in");

  const { data, error } = await updateOrderStatusServices({
    order_id,
    status,
    payment_status,
  });
  // console.log(data);
  // console.log(error);

  if (error) {
    throw new Error(error || "Failed to update order Status");
  }

  return { data };
};
