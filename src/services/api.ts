import Constants from 'expo-constants';
import axios from 'axios';

interface ConstantsData {
  apiUrl: string;
}

const { apiUrl } = Constants.expoConfig?.extra as ConstantsData;

export const api = axios.create({
  baseURL: apiUrl,
});
