import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/UserContext/UserContext";
import { useNavigate } from "react-router-dom";
import { childrenPropType } from "../PropTypes/PropTypeValidation";
// import toast from "react-hot-toast";

const Protected = ({ children }) => {
  const { usuario } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (usuario === null) {
      // toast.error("Faça o login para acessar esta página");
      navigate("/login", { replace: true });
    }
  }, [usuario, navigate]);

  return usuario?.perfil ? children : null;
}

Protected.propTypes = childrenPropType;

export default Protected