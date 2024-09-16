
// src/services/api.js

import axios from 'axios';

const API_BASE_URL = 'http://pets-v2.dev-apis.com';

export const fetchPets = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets`);
    return response.data.pets;
  } catch (error) {
    throw new Error('Error fetching pets');
  }
};

export const fetchPetById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets?id=${id}`);
    return response.data.pets[0];
  } catch (error) {
    throw new Error(`Error fetching pet with id ${id}`);
  }
};

export const fetchBreedsByAnimal = async (animal) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/breeds?animal=${animal}`);
    return response.data.breeds;
  } catch (error) {
    throw new Error(`Error fetching breeds for animal ${animal}`);
  }
};

export const searchPets = async (animal, location, breed) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets`, {
      params: { animal, location, breed },
    });
    return response.data.pets;
  } catch (error) {
    throw new Error('Error searching for pets');
  }
};
