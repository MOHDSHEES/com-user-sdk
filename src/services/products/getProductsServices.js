// src/services/productServices.js
import { BASE_URL } from "../../../env";
export const getProductsServices = async (page, limit, filters) => {
  // console.log(productId);

  try {
    const res = await fetch(`${BASE_URL}/api/products/getFilteredProducts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page, limit, filters }),
    });
    // console.log(res);

    if (!res.ok) {
      const error = await res.json();
      return { error: error.message };
    }
    const data = await res.json();

    return { data };
  } catch (err) {
    return { error: err };
  }
};
