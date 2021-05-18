import axios from 'axios';
import { getUserToken } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${getUserToken()}`,
  },
});

export default api;

// eslint-disable-next-line consistent-return
export const getMode = () => {
  if (window.location.hostname === 'localhost') {
    return true;
  }
};
