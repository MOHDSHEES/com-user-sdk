// src/services/productServices.js
import { BASE_URL } from "../../../env";
export const addOrderItemsServices = async ({ order_id, order_items } = {}) => {
  //   console.log(userId);

  try {
    if (!order_id) {
      return { error: "Order ID is required" };
    }
    const res = await fetch(`${BASE_URL}/api/order/addOrderItems`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        order_id,
        order_items,
      }),
    });
    console.log(res);

    if (!res.ok) {
      const error = await res.json();
      return { error: error.message };
    }
    const data = await res.json();
    console.log(data);

    return { data: data };
  } catch (err) {
    return { error: err };
  }
};
