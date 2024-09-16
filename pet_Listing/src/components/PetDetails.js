// src/components/PetDetails.js

import React, { useEffect, useState } from 'react';
import { fetchPetById } from '../services/api';

const PetDetails = ({ id }) => {
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPet = async () => {
      setLoading(true);
      try {
        const petData = await fetchPetById(id);
        setPet(petData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getPet();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!pet) return <p>Pet not found</p>;

  return (
    <div>
      <h2>{pet.name}</h2>
      <p>Breed: {pet.breed}</p>
      <p>Animal: {pet.animal}</p>
      <p>Location: {pet.city}, {pet.state}</p>
    </div>
  );
};

export default PetDetails;
