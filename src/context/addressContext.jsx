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
  const deleteAddressInContext = (addressId) => {
    setAddress((prev) => prev.filter((p) => p.id !== addressId));
    // setPagination((prev) => ({ ...prev, total: Math.max(prev.total - 1, 0) }));
  };
  const editAddressInContext = (updatedAddress) => {
    setAddress((prev) =>
      prev.map((p) => (p.id === updatedAddress.id ? updatedAddress : p))
    );
  };

  return (
    <AddressContext.Provider
      value={{
        address,
        loading,
        error,
        fetchAddress,
        addAddressInContext,
        deleteAddressInContext,
        editAddressInContext,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => useContext(AddressContext);
