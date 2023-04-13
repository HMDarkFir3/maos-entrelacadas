import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://smiling-headscarf-foal.cyclic.app/api',
});
