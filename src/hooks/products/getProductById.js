// src/server/products/getProductById.ts

import { getProductByIdServices } from "../../services/products/getProductsByIdServices";

export const getProductById = async (productId) => {
  const { data, error } = await getProductByIdServices(productId);

  if (error || !data?.product) {
    throw new Error("Failed to fetch product");
  }

  return data.product;
};
