// src/context/PetContext.js

import React, { createContext, useState, useContext } from 'react';

const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <PetContext.Provider value={{ pets, setPets, loading, setLoading, error, setError }}>
      {children}
    </PetContext.Provider>
  );
};

export const usePets = () => {
  return useContext(PetContext);
};
