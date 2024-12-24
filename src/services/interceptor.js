// interceptor.js
import axios from 'axios';

// Creating a instance of the Axios
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// Adding an interceptor for logging errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api;
