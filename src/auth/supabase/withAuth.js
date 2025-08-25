// src/sdk/utils/withAuth.js

import { useAuthContext } from "../../context";

/**
 * Wrap an SDK function to require authentication
 * @param {Function} fn - function to wrap
 * @returns {Function} - wrapped function
 */
export const withAuth = (fn) => {
  return async (...args) => {
    const { user } = useAuthContext();
    // console.log(user);

    if (!user) {
      throw new Error("User not authenticated");
    }
    return fn(...args, { user }); // inject user info optionally
  };
};
