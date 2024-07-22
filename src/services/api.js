import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const register = (userData) => axios.post(`${API_URL}/register`, userData);
export const login = (userData) => axios.post(`${API_URL}/login`, userData);
export const uploadVideo = (videoData) => axios.post(`${API_URL}/upload`, videoData);
