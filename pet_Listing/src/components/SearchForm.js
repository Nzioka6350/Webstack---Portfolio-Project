// src/components/SearchForm.js

import React, { useState } from 'react';
import { searchPets } from '../services/api';
import { usePets } from '../context/PetContext';

const SearchForm = () => {
  const [animal, setAnimal] = useState('');
  const [location, setLocation] = useState('');
  const [breed, setBreed] = useState('');
  const { setPets, setLoading, setError } = usePets();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const petsData = await searchPets(animal, location, breed);
      setPets(petsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Animal:
        <input type="text" value={animal} onChange={(e) => setAnimal(e.target.value)} />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <label>
        Breed:
        <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
