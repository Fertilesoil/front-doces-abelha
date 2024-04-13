import { useContext } from "react"
import { AuthContext } from "../contexts/UserContext/UserContext";

const HomePage = () => {

  const { usuario } = useContext(AuthContext);

  return (
    < div > Bem vinde { usuario.perfil.primeiro_nome } { usuario.perfil.sobrenome } !</div >
  );
}

export default HomePage;