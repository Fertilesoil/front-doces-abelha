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
      navigate("/login", { replace: true });
    }
  }, []);

  return usuario?.perfil && children;
}

Protected.propTypes = childrenPropType;

export default Protected