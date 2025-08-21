// src/sdk/hooks/useCartActions.js
"use client";

import { useAddressContext } from "../../context"; // adjust import path as needed
import { addAddress as addAddressToDb } from "./addAddress";

export const useAddressActions = () => {
  const { fetchAddress, addAddressInContext } = useAddressContext();
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

  return {
    addAddress,
    fetchAddress,
  };
};
