import toast from "react-hot-toast";
import { Api, interceptador } from "./Api";

export const buscarToken = async (setUsuario) => {
  try {
    let token = "";
    const response = await Api.post("/api/refresh", { token });

    const perfil = await Api.get("/api/autenticacao", {
      headers: { Authorization: `Bearer ${response.data.tokenAcesso}` },
    });

    setUsuario({ perfil: perfil.data, token: response.data.tokenAcesso });
    toast.success(`Bem vinde de volta ${perfil.data.nome}!`);
    return null;
  } catch (error) {
    toast.error("Seu token expirou, faça login novamente.");
    return error;
  }
};

export const refreshToken = (setUsuario) => {
  Api.interceptors.request.use(async (config) => {
    try {
      let token = "";
      const response = await interceptador.post("/api/refresh", {
        token
      });

      config.headers.Authorization = `Bearer ${response.data.tokenAcesso}`;

      const perfil = await interceptador.get("/api/autenticacao", {
        headers: {
          Authorization: `Bearer ${response.data.tokenAcesso}`
        }
      });
      setUsuario({ perfil: perfil.data, token: response.data.tokenAcesso });
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
    return config;
  })
}