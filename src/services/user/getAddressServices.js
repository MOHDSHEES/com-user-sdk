import { BASE_URL } from "../../../env";

export const getAddressServices = async ({ user_id, type }) => {
  //   console.log(formData);

  try {
    const res = await fetch(`${BASE_URL}/api/user/get-address`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id, type }),
    });

    if (!res.ok) {
      const error = await res.json();
      return { data: null, error: error.message };
    }

    const data = await res.json();
    // console.log(data);

    return data;
  } catch (err) {
    return { data: null, error: err };
    // return { error: "Network/server error" };
  }
};
