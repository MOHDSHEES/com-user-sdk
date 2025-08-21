// src/server/products/getProductById.ts

import { getAddressServices } from "../../services/user/getAddressServices";

// import { getProductsServices } from "../../services/products/getProductsServices";

export const getAddress = async ({ user_id, type }) => {
  if (!user_id) {
    throw new Error("User ID is required");
  }
  const { data, error } = await getAddressServices({ user_id, type });
  //   console.log(data);

  if (error) {
    throw new Error("Failed to fetch address");
  }

  return { data: data };
};
