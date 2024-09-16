import React from 'react';
import PetList from '../components/PetList';
import SearchForm from '../components/SearchForm';
import { usePetDispatch } from '../context/PetContext';

const Home = () => {
  const dispatch = usePetDispatch();

  const handleSearch = (pets) => {
    dispatch({ type: 'SET_PETS', payload: pets });
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <PetList />
    </div>
  );
};

export default Home;
