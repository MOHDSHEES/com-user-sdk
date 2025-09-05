// src/server/products/getProductById.ts

import { getUserByEmaillServices } from "../../services/user/getUserByEmailServices";

// import { getAddressServices } from "../../services/user/getAddressServices";

// import { getProductsServices } from "../../services/products/getProductsServices";

export const getUserByEmail = async ({ email }) => {
  if (!email) {
    throw new Error("Email ID is required");
  }
  const { data, error } = await getUserByEmaillServices({ email });
  //   console.log(data);

  if (error) {
    throw new Error("Failed to fetch address");
  }

  return { data: data };
};
