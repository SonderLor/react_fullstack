import axios from './axios';

export const validateToken = async () => {
  try {
    const response = await axios.get('/auth/validate-token');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post('/auth/login', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('user');
};
