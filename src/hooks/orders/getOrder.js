// src/server/products/getProductById.ts

import { getOrderServices } from "../../services/orders/getOrderServices";

export const getOrder = async ({
  userId,
  page = 1,
  limit = 10,
  filters = {},
} = {}) => {
  //   console.log("in");

  const { data, error } = await getOrderServices({
    userId,
    page,
    limit,
    filters,
  });
  //   console.log(data);

  if (error) {
    throw new Error(error || "Failed to fetch products");
  }

  return { data };
};
