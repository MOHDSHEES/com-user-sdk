// src/server/products/getProductById.ts

import { editUserServices } from "../../services/user/editUserServices";

export const editUser = async ({ userId, updated_user }) => {
  if (!userId) throw new Error("User Id is required");
  // const { fetchCart } = useCartContext();
  const { data, error } = await editUserServices({
    userId,
    updated_user,
  });

  if (error) {
    throw new Error(error || "Failed to add user");
  }
  //   console.log(data);

  return { data: data };
};
