import { BASE_URL } from "../../../env";

export const deleteAddressServices = async ({ addressId }) => {
  //   console.log(formData);

  try {
    const res = await fetch(`${BASE_URL}/api/user/delete-address`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ addressId }),
    });

    if (!res.ok) {
      const error = await res.json();
      return { data: null, error: error.message };
    }

    const data = await res.json();
    // console.log(data);

    return { data: data };
  } catch (err) {
    return { data: null, error: err };
    // return { error: "Network/server error" };
  }
};
