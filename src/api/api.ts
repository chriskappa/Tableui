import axios from "axios";
import { BASE_URL } from '@/constants/constants';
export const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
});