// src/services/productServices.js
import { BASE_URL } from "../../../env";
export const getProductByIdServices = async (productId) => {
  // console.log(productId);

  try {
    const res = await fetch(`${BASE_URL}/api/products/getById/${productId}`);
    if (!res.ok) {
      const error = await res.json();
      return { error: error.message };
    }
    const data = await res.json();

    return { data };
  } catch (err) {
    return { error: "Network/server error" };
  }
};
