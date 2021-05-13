import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost';

export const get = async (endpoint: String) => {
  return axios.get(`${API_URL}${endpoint}`);
};
