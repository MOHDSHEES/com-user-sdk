// src/context/ProductsContext.js
"use client";
import { createContext, useContext, useState, useCallback } from "react";
import { getAddressServices } from "../services/user/getAddressServices";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAddress = useCallback(async ({ user_id, type }) => {
    setLoading(true);
    // console.log("in");

    const { data, error } = await getAddressServices({
      user_id,
      type,
    });

    if (data) {
      setAddress(data || []);
      setError(null);
    } else {
      setError(error);
    }
    setLoading(false);
  }, []);
  const addAddressInContext = (newAddress) => {
    setAddress((prev) => [newAddress, ...prev]);
  };
  // const editProductInCartContext = (updatedProduct) => {
  //   setCart((prev) =>
  //     prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
  //   );
  // };

  return (
    <AddressContext.Provider
      value={{
        address,
        loading,
        error,
        fetchAddress,
        addAddressInContext,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => useContext(AddressContext);
