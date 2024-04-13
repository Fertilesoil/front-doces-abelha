import { useState } from "react";
import { childrenPropType } from "../../PropTypes/PropTypeValidation"
import { AuthContext } from "./UserContext";
import { Api } from "../../services/Api";


export const AuthProvider = ({ children }) => {

  const [usuario, setUsuario] = useState(null);

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
      console.log(usuario);
      return response;
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  }

  return (
    <AuthContext.Provider value={{ usuario, loginApiCall }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = childrenPropType;