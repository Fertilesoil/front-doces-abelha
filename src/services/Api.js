import axios from "axios";

const config = {
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
}

export const Api = axios.create(config)

export const interceptador = axios.create(config);