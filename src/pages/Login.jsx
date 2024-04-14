import { useContext, useEffect } from "react";
import FormsWraper from "../components/formularios/FormsWraper";
import FormularioLogin from "../components/formularios/FormularioLogin";
import { AuthContext } from "../contexts/UserContext/UserContext";
import { useNavigate } from "react-router-dom";
import { buscarToken } from "../services/UsuarioService";

const Login = () => {

  const { setUsuario } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    buscarToken(setUsuario)
      .then(result => {
        if (result === null) {
          navigate("/");
        }
      });
  });


  return (
    <FormsWraper
      borderLeft="rounded-l-lg"
      borderRight="rounded-r-lg"
    >
      <FormularioLogin />
    </FormsWraper>
  )
}

export default Login