import { Link } from "react-router-dom"
import { botaoLinkPropType } from "../../PropTypes/PropTypeValidation"


const BotaoLinkRecheios = ({caminho, loading, titulo}) => {
  return (
    <Link
      to={caminho}
      className={`${loading ? "px-3 py-2 bg-pink-500 text-white rounded-md font-[500] flex items-center transition-all" : "px-3 py-2 bg-[#1d4151] hover:text-[#1d4151] hover:bg-white hover:border-[#1d4151] border-2 transition-all text-white rounded-md font-[500] flex items-center"}`}
    >
      <span className="font-[600] tracking-wide">{titulo}</span>
    </Link>
  )
}

BotaoLinkRecheios.propTypes = botaoLinkPropType;

export default BotaoLinkRecheios