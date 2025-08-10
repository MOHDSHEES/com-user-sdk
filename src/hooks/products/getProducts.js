// src/server/products/getProductById.ts

import { getProductsServices } from "../../services/products/getProductsServices";

export const getProducts = async (page, limit, filters) => {
  const { data, error } = await getProductsServices(page, limit, filters);

  if (error || !data?.product) {
    throw new Error("Failed to fetch product");
  }

  return data.product;
};
