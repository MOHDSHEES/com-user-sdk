// src/server/products/getProductById.ts

import { deleteAddressServices } from "../../services/user/deleteAddressServices";

export const deleteAddress = async ({ addressId }) => {
  if (!addressId) throw new Error("Address ID is required");
  // const { fetchCart } = useCartContext();
  const { data, error } = await deleteAddressServices({
    addressId,
  });

  if (error) {
    throw new Error(error || "Failed to delete address");
  }
  //   console.log(data);

  return { data: data };
};
