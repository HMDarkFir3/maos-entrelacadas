import Constants from 'expo-constants';
import axios from 'axios';

interface ConstantsEnv {
  apiUrl: string;
}

const { apiUrl } = Constants.expoConfig?.extra as ConstantsEnv;

export const api = axios.create({
  baseURL: apiUrl,
});
