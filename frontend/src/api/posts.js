import axios from './axios';

export const createPost = async (postData) => {
  try {
    const response = await axios.post('/posts', postData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllPosts = async () => {
  try {
    const response = await axios.get('/posts');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getPostById = async (id) => {
  try {
    const response = await axios.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updatePost = async (id, postData) => {
  try {
    const response = await axios.put(`/posts/${id}`, postData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deletePost = async (id) => {
  try {
    const response = await axios.delete(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
