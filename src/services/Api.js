import axios from "axios";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
// axios.defaults.withCredentials = true;
// axios.defaults.headers['Content-Type'] = 'application/json';

export const Api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const interceptador = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});