import axios from 'axios';
import { getUserToken } from './auth';

// eslint-disable-next-line consistent-return
const tryGetUserToken = (count = 1) => {
  if (count >= 100) return '';

  const token = getUserToken();

  if (token) return token;

  setTimeout(() => {
    tryGetUserToken(count + 1);
  }, 500 * count);
};

const token = tryGetUserToken();

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `token ${token}`,
  },
});

export default api;

// eslint-disable-next-line consistent-return
export const getMode = () => {
  if (window.location.hostname === 'localhost') {
    return true;
  }
};
