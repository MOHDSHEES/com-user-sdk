// src/server/products/getProductById.ts

import { getProductsServices } from "../../../services/products/getProductsServices";

export const getProducts = async (page, limit, filters) => {
  //   console.log(page, limit, filters);

  const { data, error } = await getProductsServices(page, limit, filters);
  //   console.log(data);

  if (error || !data?.products) {
    throw new Error("Failed to fetch products");
  }

  return data.products;
};
