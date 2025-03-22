import axios from './axios';

export const getUsers = async () => {
  try {
    const response = await axios.get('/users');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`/users/${id}`);
    return id;
  } catch (error) {
    throw error.response.data;
  }
};
