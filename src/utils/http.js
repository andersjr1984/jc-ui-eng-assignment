import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8005/api',
});

export default instance;
