import { useContext, useEffect } from "react";
import { childrenPropType } from "../PropTypes/PropTypeValidation";
import { Api } from "../services/Api";
import { AuthContext } from "../contexts/UserContext/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Refresh = async ({ children }) => {

  const { setUsuario } = useContext(AuthContext);
  const navigate = useNavigate();

  const refreshToken = async () => {
    try {
      let token = "";
      const response = await Api.post("/api/refresh", {
        token
      });

      Api.headers.Authorization = `Bearer ${response.data.tokenAcesso}`;

      const perfil = await Api.get("/api/autenticacao", {
        headers: {
          Authorization: `Bearer ${response.data.tokenAcesso}`
        }
      });

      setUsuario({ perfil: perfil.data, token: response.data.tokenAcesso });
      toast.success("Autenticado com sucesso!");
      toast.success("Bem vindo de volta!");
      navigate("/");
    } catch (error) {
      console.log(`Erro: ${error}`);
      toast.error("Seu token expirou, faça login novamente.");
      navigate("/login");
    }
  }

  useEffect(() => {
    refreshToken();
  }, []);

    return (children || null)
}

Refresh.propTypes = childrenPropType;

export default Refresh