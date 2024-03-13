import axios from 'axios';

const API_URL = 'https://faculty-journal-backend.onrender.com';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

// export const postData = async (path, data) => {
//   try {
//     const response = await api.post(path, data);
//     return response.data;
//   } catch (error) {
//     console.error('Error while sending data:', error);
//     throw error;
//   }
// };

// export const getData = async (path) => {
//   try {
//     const response = await api.get(path);
//     return response.data;
//   } catch (error) {
//     console.error('Error while fetching data:', error);
//     throw error;
//   }
// };
