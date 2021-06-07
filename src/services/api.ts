import axios from 'axios';
import { getUserToken } from './auth';

const api = axios.create();

api.interceptors.request.use(async config => {
  const token = getUserToken();
  const apiConfig = config;

  apiConfig.baseURL = 'http://localhost:3333';

  if (token) {
    apiConfig.headers = {
      Authorization: `Bearer ${getUserToken()}`,
      'X-Requested-With': 'XMLHttpRequest',
    };
  } else {
    apiConfig.headers = {
      'X-Requested-With': 'XMLHttpRequest',
    };
  }

  return apiConfig;
});

export default api;

// eslint-disable-next-line consistent-return
export const getMode = () => {
  if (window.location.hostname === 'localhost') {
    return true;
  }
};
