import { BASE_URL } from "../../../env";

export const addUserServices = async ({ user }) => {
  //   console.log(formuser);
  // console.log(user);

  try {
    const res = await fetch(`${BASE_URL}/api/user/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user }),
    });

    if (!res.ok) {
      const error = await res.json();
      return { data: null, error: error.message };
    }

    const data = await res.json();
    return { data };
  } catch (err) {
    return { data: null, error: err };
    // return { error: "Network/server error" };
  }
};
