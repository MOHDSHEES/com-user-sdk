// src/sdk/hooks/useCartActions.js
"use client";

import { addUserServices } from "../../services/user/addUserServices";
import { getUserByEmaillServices } from "../../services/user/getUserByEmailServices";
import { useUserContext } from "../../context";
import { editUser } from "./editUser";

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

  const editUserAction = async ({ userId, updated_user }) => {
    const { data, error } = await editUser({
      userId,
      updated_user,
    });
    if (error) throw new Error(error);
    // console.log(data);

    addUserInContext(data.user);

    return { data: data.user };
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
    editUser: editUserAction,
  };
};
