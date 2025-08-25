"use client";
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();
// f47ac10b-58cc-4372-a567-0e02b2c3d479
export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Context-aware signup
  const addUser = async ({ user }) => {
    setUser(user);
  };
  const removeUser = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider
      value={{
        user,
        addUser,
        loading,
        setLoading,
        removeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => useContext(UserContext);
// Custom hook to consume context
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within AuthProvider");
//   return context;
// };
