import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

// eslint-disable-next-line consistent-return
export const getMode = () => {
  if (window.location.hostname === 'localhost') {
    return true;
  }
};
