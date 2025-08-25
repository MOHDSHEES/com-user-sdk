// src/sdk/hooks/useCartActions.js
"use client";

import { useOrderContext } from "../../context"; // adjust import path as needed
import { getOrderServices } from "../../services/orders/getOrderServices";

export const useOrderActions = () => {
  const { updateOrders, updatePagiation, setLoading } = useOrderContext();
  // const { user } = useUserContext();
  const getOrder = async ({ userId, page = 1, limit = 10, filters = {} }) => {
    // console.log(user);
    setLoading(true);

    if (!userId) throw new Error("User Id is required");
    const { data, error } = await getOrderServices({
      userId,
      page,
      limit,
      filters,
    });
    if (error) {
      setLoading(false);
      throw new Error(error || "Failed to fetch products");
    }
    // console.log(user);
    updateOrders({ order: data.orders });
    updatePagiation({ pagination: data.pagination });
    setLoading(false);
    return { data };
  };

  return {
    getOrder,
  };
};
