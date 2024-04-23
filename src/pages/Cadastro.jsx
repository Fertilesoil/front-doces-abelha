import { useContext, useEffect } from "react";
import FormsWraper from "../components/formularios/FormsWraper";
import FormularioCadastro from "../components/formularios/FormularioCadastro";
import { AuthContext } from "../contexts/UserContext/UserContext";
import { useNavigate } from "react-router-dom";
import { buscarToken } from "../services/UsuarioService";

const Cadastro = () => {

  const { setUsuario } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    buscarToken(setUsuario)
      .then(result => {
        if (result === null) {
          navigate("/");
        }
      });
  }, []);

  return (
    <FormsWraper
      flex="flex-row-reverse"
      borderLeft="rounded-r-lg"
      borderRight="rounded-l-lg"
    >
      <FormularioCadastro />
    </FormsWraper>
  );
}

export default Cadastro;