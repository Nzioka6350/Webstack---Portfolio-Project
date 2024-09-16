// src/components/PetList.js

import React, { useEffect } from 'react';
import { fetchPets } from '../services/api';
import { usePets } from '../context/PetContext';

const PetList = () => {
  const { pets, setPets, loading, setLoading, error, setError } = usePets();

  useEffect(() => {
    const getPets = async () => {
      setLoading(true);
      try {
        const petsData = await fetchPets();
        setPets(petsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getPets();
  }, [setPets, setLoading, setError]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (pets.length === 0) return <p>No pets available</p>;

  return (
    <div>
      {pets.map((pet) => (
        <div key={pet.id}>
          <h3>{pet.name}</h3>
          <p>{pet.breed}</p>
        </div>
      ))}
    </div>
  );
};

export default PetList;
