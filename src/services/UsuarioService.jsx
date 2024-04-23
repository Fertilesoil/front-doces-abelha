import toast from "react-hot-toast";
import { Api } from "./Api";

export const buscarToken = async (setUsuario) => {
  try {
    let token = "";
    const response = await Api.post("/api/refresh", { token });

    if (response.statusCode === 400) {
      return response.data;
    }

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