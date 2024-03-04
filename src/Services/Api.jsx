import axios from 'axios';

const API_URL = 'http://your-backend-url.com/api'; // Replace with your actual backend URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const postData = async (path, data) => {
  try {
    const response = await api.post(path, data);
    return response.data;
  } catch (error) {
    console.error('Error while sending data:', error);
    throw error;
  }
};

export const getData = async (path) => {
  try {
    const response = await api.get(path);
    return response.data;
  } catch (error) {
    console.error('Error while fetching data:', error);
    throw error;
  }
};
