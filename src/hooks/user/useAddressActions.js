// src/sdk/hooks/useCartActions.js
"use client";

import { useAddressContext } from "../../context"; // adjust import path as needed
import { deleteAddressServices } from "../../services/user/deleteAddressServices";
import { addAddress as addAddressToDb } from "./addAddress";
import { editAddress as editAddressToDb } from "./editAddress";

export const useAddressActions = () => {
  const {
    fetchAddress,
    addAddressInContext,
    deleteAddressInContext,
    editAddressInContext,
  } = useAddressContext();
  const addAddress = () => {
    // get form methods + original submit
    const { onSubmit: rawSubmit, ...formMethods } = addAddressToDb();

    const onSubmit = async ({ data, extra }) => {
      const { result, error } = await rawSubmit({ data, extra });

      if (error) throw new Error(error);

      if (result.success) {
        addAddressInContext(result.address);
        // OR await fetchAddress({ user_id: extra.userId });
      }

      return { result, error };
    };

    return {
      ...formMethods, // react-hook-form methods + Controller
      onSubmit, // context-aware submit
    };
  };

  const editAddress = ({ address }) => {
    // get form methods + original submit
    const { onSubmit: rawSubmit, ...formMethods } = editAddressToDb({
      address,
    });

    const onSubmit = async ({ data, extra }) => {
      if (extra && !extra.addressId)
        throw new Error("Address ID is required in extra");
      const { result, error } = await rawSubmit({ data, extra });

      if (error) throw new Error(error);

      if (result.success) {
        editAddressInContext(result.address);
        // OR await fetchAddress({ user_id: extra.userId });
      }

      return { result, error };
    };

    return {
      ...formMethods, // react-hook-form methods + Controller
      onSubmit, // context-aware submit
    };
  };

  const deleteAddress = async ({ addressId }) => {
    if (!addressId) throw new Error("Address ID is required");
    const { data, error } = await deleteAddressServices({
      addressId,
    });
    if (error) throw new Error(error);
    // console.log(data);

    deleteAddressInContext(addressId);
    // console.log(data);

    return { data: data };
  };

  return {
    addAddress,
    fetchAddress,
    deleteAddress,
    editAddress,
  };
};
