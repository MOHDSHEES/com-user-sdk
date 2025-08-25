// src/server/products/getProductById.ts

import { addUserServices } from "../../services/user/addUserServices";

export const addUser = async ({ user }) => {
  // const { fetchCart } = useCartContext();
  const { data, error } = await addUserServices({
    user,
  });

  if (error) {
    throw new Error(error || "Failed to add user");
  }

  return data;
};
