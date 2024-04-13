import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/UserContext/UserContext";
import { useNavigate } from "react-router-dom";
import { childrenPropType } from "../PropTypes/PropTypeValidation";

const Protected = ({ children }) => {
  const { usuario } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (usuario === null) {
      navigate("/login", { replace: true });
    }
  }, [usuario, navigate]);
  return usuario?.perfil ? children : null;
}

Protected.propTypes = childrenPropType;

export default Protected