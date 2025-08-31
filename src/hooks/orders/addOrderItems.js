// src/server/products/getProductById.ts

import { addOrderItemsServices } from "../../services/orders/addOrderItemServices";

// import { getOrderServices } from "../../services/orders/getOrderServices";

export const addOrderItems = async ({ order_id, order_items } = {}) => {
  //   console.log("in");

  const { data, error } = await addOrderItemsServices({
    order_id,
    order_items,
  });
  // console.log(data);
  // console.log(error);

  if (error) {
    throw new Error(error || "Failed to add order Items");
  }

  return { data };
};
