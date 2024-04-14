import { useState } from "react";
import { childrenPropType } from "../../PropTypes/PropTypeValidation"
import { AuthContext } from "./UserContext";
import { Api, interceptador } from "../../services/Api";

export const AuthProvider = ({ children }) => {

  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  const manter = () => {
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
        return usuario.perfil.sobrenome;
      } catch (error) {
        console.log(`Erro: ${error}`);
      }
      return config;
    })
  }

  const loginApiCall = async (payload) => {
    try {

      const response = await Api.post("/api/login", payload);

      const token = response.data.tokenAcesso;

      const perfil = await Api.get("/api/autenticacao", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setUsuario({ perfil: perfil.data, token: token });
      return response;
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  }

  const shared = {
    usuario,
    loginApiCall,
    manter,
    setUsuario,
    loading,
    setLoading
  }

  return (
    <AuthContext.Provider value={shared}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = childrenPropType;