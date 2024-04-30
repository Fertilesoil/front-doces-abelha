import { Link } from "react-router-dom";
import { botaoLinkPropType } from "../../../PropTypes/PropTypeValidation"

const BotaoLinkProdutos = ({ caminho, loading, titulo }) => {
  return (
    <Link
      to={caminho}
      className={`${loading ? "px-7 py-[.40rem] bg-teal-500 text-white text-sm font-[400] rounded-md flex items-center transition-all ease-linear duration-[.25s]" : "px-7 py-[.40rem] bg-[#1d4151] text-white text-sm hover:text-[#1d4151] hover:bg-white hover:ring-[#1d4151] ring-1 ring-[#1d4151] transition-all duration-[.25s] ease-linear rounded-md font-[400] flex items-center"}`}
    >
      <span className="font-[600] tracking-wider">{titulo}</span>
    </Link>
  )
}

BotaoLinkProdutos.propTypes = botaoLinkPropType;

export default BotaoLinkProdutos