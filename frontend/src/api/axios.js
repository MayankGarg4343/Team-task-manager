import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api/v1',
  withCredentials: true // send cookies
});

export default api;
