import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext/UserContext";
import { EllipsisVertical } from "lucide-react";
import { perfilPropType } from "../../PropTypes/PropTypeValidation";

const Perfil = ({ props }) => {

  const { iniciais, usuario } = useContext(AuthContext);

  const nome = usuario?.perfil.nome;
  const sobrenome = usuario?.perfil.sobrenome.split(" ")[0];

  return (
    <div className={`border-t flex transition-all ${props ? "p-3" : "p-1 items-center"}`}>
      <span className={`w-10 ${props ? "h-10" : "h-10 ml-1.5"} rounded-md font-ManRope font-semibold tracking-wider bg-[#84A9E3] text-[#F5F5F5] flex items-center justify-center`}>
        {iniciais}
      </span>

      <div className={`flex justify-between items-center overflow-hidden transition-all ${props ? "w-[11rem] ml-3" : "w-0"} `}>
        <div className="leading-4">
          <h4 className="font-semibold">{nome} {sobrenome}</h4>
          <span className="text-xs text-gray-600">{usuario?.perfil.email}</span>
        </div>

        <EllipsisVertical size={20} />
      </div>

    </div>
  )
}

Perfil.propTypes = perfilPropType;

export default Perfil