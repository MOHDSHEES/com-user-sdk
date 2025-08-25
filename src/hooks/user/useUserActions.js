// src/sdk/hooks/useCartActions.js
"use client";

import { set } from "react-hook-form";
import { addUserServices } from "../../services/user/addUserServices";
import { getUserByEmaillServices } from "../../services/user/getUserByEmailServices";
import { useUserContext } from "../../context";

export const useUserActions = () => {
  const { addUser: addUserInContext, setLoading } = useUserContext();

  const addUser = async ({ user }) => {
    const { data, error } = await addUserServices({
      user,
    });
    if (error) throw new Error(error);
    // console.log(data);

    addUserInContext(data.user);

    return data.user;
  };

  const getUserByEmail = async ({ email }) => {
    setLoading(true);
    const { data, error } = await getUserByEmaillServices({
      email,
    });
    if (error) throw new Error(error);
    // console.log(data);

    addUserInContext({ user: data });
    setLoading(false);
    return data;
  };

  return {
    addUser,
    getUserByEmail,
  };
};
