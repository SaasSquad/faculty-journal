import axios from 'axios';

// const API_URL = 'https://busy-erin-centipede-yoke.cyclic.app';

// const API_URL = 'https://faculty-journal-backend.onrender.com';

const API_URL = 'http://localhost:3001';


axios.defaults.withCredentials = true

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  },
});

export default api;
