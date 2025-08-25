"use client";
import { createContext, useContext, useState, useEffect } from "react";
import {
  getUser,
  signInEmailPassword,
  signOut,
  signUpEmailPassword,
  //   supabaseClient as importedClient,
} from "../auth/supabase";

const AuthContext = createContext();
// f47ac10b-58cc-4372-a567-0e02b2c3d479
export const AuthProvider = ({ children }) => {
  //   const [user, setUser] = useState({
  //     user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  //   });
  const [authentication, setAuthentication] = useState(null);
  const [loading, setLoading] = useState(true);
  //   const [client, setClient] = useState(importedClient);
  // Initialize user on mount
  //   useEffect(() => {
  //     // console.log(client);
  //     // if (!client) return;

  //     const fetchUser = async () => {
  //     //   console.log("in");

  //       try {
  //         const { data } = await getUser();
  //         // console.log(data);

  //         setAuthentication(data?.user ?? null);
  //       } catch (err) {
  //         // console.error("Error fetching user:", err);
  //         setAuthentication(null);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchUser();
  //   }, []);
  const fetchAuthentication = async () => {
    //   console.log("in");

    try {
      const { data } = await getUser();
      // console.log(data);

      setAuthentication(data?.user ?? null);
    } catch (err) {
      // console.error("Error fetching user:", err);
      setAuthentication(null);
    } finally {
      setLoading(false);
    }
  };

  // Context-aware signup
  const signup = async ({ email, password, metadata = {}, redirectTo }) => {
    const response = await signUpEmailPassword(
      email,
      password,
      metadata,
      redirectTo
    );
    if (response?.data?.user) setAuthentication(response.data.user);
    return response;
  };

  // Context-aware signin
  const login = async ({ email, password }) => {
    const response = await signInEmailPassword(email, password);
    if (response?.data?.user) setAuthentication(response.data.user);
    return response;
  };

  // Context-aware signout
  const logout = async () => {
    const response = await signOut();
    setAuthentication(null);
    // setUser(null);
    return response;
  };

  return (
    <AuthContext.Provider
      value={{
        // user,
        authentication,
        fetchAuthentication,
        loading,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
// Custom hook to consume context
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within AuthProvider");
//   return context;
// };
