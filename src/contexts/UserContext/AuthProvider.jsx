import { useState } from "react";
import { childrenPropType } from "../../PropTypes/PropTypeValidation"
import { AuthContext } from "./UserContext";
import { Api, interceptador } from "../../services/Api";

export const AuthProvider = ({ children }) => {

  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(false);

  const obterIniciais = (usuario) => {
    const primeiraLetra = usuario?.perfil.nome.split("")[0];
    const segundaLetra = usuario?.perfil.sobrenome.split("")[0];
    const nomePerfil = primeiraLetra + segundaLetra;

    return nomePerfil;
  }

  const iniciais = obterIniciais(usuario);

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
      setLoading(true);
      const response = await Api.post("/api/login", payload);

      const token = response.data.tokenAcesso;

      const perfil = await Api.get("/api/autenticacao", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setUsuario({ perfil: perfil.data, token: token });
      return response.data;
    } catch (error) {
      console.log(`Erro: ${error}`);
      setLoading(false);
      return error;
    }
  }

  const logoutApiCall = async () => {
    try {
      const deslogar = await Api.post("/api/logout");
      console.log(deslogar.data);
      if (deslogar) {
        return null;
      }
    } catch (error) {
      console.log(`Erro: ${error.message}`);
    }
  }

  let shared = {
    usuario,
    loginApiCall,
    manter,
    setUsuario,
    loading,
    setLoading,
    iniciais,
    logoutApiCall
  }

  return (
    <AuthContext.Provider value={shared}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = childrenPropType;