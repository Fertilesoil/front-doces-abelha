import toast from "react-hot-toast";
import { Api } from "./Api";

export const buscarToken = async (setUsuario) => {
  try {
    let token = "";
    const response = await Api.post("/api/refresh", { token });

    const perfil = await Api.get("/api/autenticacao", {
      headers: { Authorization: `Bearer ${response.data.tokenAcesso}` },
    });

    setUsuario({ perfil: perfil.data, token: response.data.tokenAcesso });
    toast.success("Bem vindo de volta!");
    return null;
  } catch (error) {
    toast.error("Seu token expirou, faça login novamente.");
    return error;
  }
};
