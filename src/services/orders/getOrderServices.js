// src/services/productServices.js
import { BASE_URL } from "../../../env";
export const getOrderServices = async ({
  userId,
  page = 1,
  limit = 10,
  filters = {},
} = {}) => {
  //   console.log(userId);

  try {
    if (!userId) {
      return { error: "User ID is required" };
    }
    const res = await fetch(`${BASE_URL}/api/order/get`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        page,
        limit,
        filters, // send any filter/sort if needed
      }),
    });
    // console.log(res);

    if (!res.ok) {
      const error = await res.json();
      return { error: error.message };
    }
    const data = await res.json();

    return { data: data };
  } catch (err) {
    return { error: err };
  }
};
