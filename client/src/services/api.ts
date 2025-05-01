import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api', // Your backend API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add token to headers (already handled in AuthContext)
// You could add error handling interceptors here as well

export default api;