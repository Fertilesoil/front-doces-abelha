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


Api.interceptors.request.use(async (config) => {
  try {
    let token = "";
    const response = await interceptador.post("/api/refresh", {
      token
    });

    config.headers.Authorization = `Bearer ${response.data.tokenAcesso}`;

  } catch (error) {
    console.log(`Erro: ${error}`);
  }
  return config;
})