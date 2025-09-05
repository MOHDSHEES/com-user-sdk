// src/services/productServices.js
import { BASE_URL } from "../../../env";
export const updateOrderStatusServices = async ({
  order_id,
  status,
  payment_status,
} = {}) => {
  //   console.log(order_id);

  try {
    if (!order_id) {
      return { error: "Order ID is required" };
    }
    const res = await fetch(`${BASE_URL}/api/order/updateOrderStatus`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        order_id,
        status,
        payment_status,
      }),
    });
    // console.log(res);

    if (!res.ok) {
      const error = await res.json();
      return { error: error.message };
    }
    const data = await res.json();
    // console.log(data);

    return { data: data };
  } catch (err) {
    return { error: err };
  }
};
