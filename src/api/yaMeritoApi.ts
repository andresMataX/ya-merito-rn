import axios from 'axios';

export const URL = 'https://ya-merito-api.onrender.com'

export const meritoAPI = axios.create({
  baseURL: URL
})