import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_HOST;
export const tokenService = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export default axios;
