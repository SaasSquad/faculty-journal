import axios from 'axios';

// const API_URL = 'https://busy-erin-centipede-yoke.cyclic.app';

const API_URL = 'https://faculty-journal-backend.onrender.com';

// const API_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept' : 'application/json, application/pdf, image/jpeg, image/png',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  },
});

export {API_URL};

export default api;
