"use client";
import { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();
// f47ac10b-58cc-4372-a567-0e02b2c3d479
export const OrderProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState(null);
  const [pagination, setPagination] = useState(null);

  // Context-aware signup
  const addNewOrder = ({ newOrder }) => {
    if (pagination?.page === 1) {
      setOrders((prev) => {
        if (!prev || prev.length === 0) return [newOrder];

        // build array with newOrder in front
        const next = [newOrder, ...prev];

        // slice instead of pop for efficiency + immutability
        return next.length > pagination.limit
          ? next.slice(0, pagination.limit)
          : next;
      });
    }
  };

  const updateOrders = async ({ order }) => {
    // console.log(order);

    // if (orders === null) {
    setOrders(order);
    //   return;
    // }
    // setOrders([...orders, ...order]);
  };

  const updatePagiation = async ({ pagination }) => {
    setPagination(pagination);
  };
  //   const removeUser = () => {
  //     setUser(null);
  //   };
  return (
    <OrderContext.Provider
      value={{
        orders,
        addNewOrder,
        pagination,
        loading,
        setLoading,
        updateOrders,
        updatePagiation,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
export const useOrderContext = () => useContext(OrderContext);
// Custom hook to consume context
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within AuthProvider");
//   return context;
// };
