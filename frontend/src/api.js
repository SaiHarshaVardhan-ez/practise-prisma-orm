import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const updateUser = async (userData) => {
  const response = await axios.put(`${API_URL}/update`, userData);
  return response.data;
};
