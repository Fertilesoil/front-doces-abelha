import { Trash2 } from "lucide-react";
import { TailSpinLoader } from "../../../loaders/TailSpinLoader";
import { botaoExcluirProdVendaPropType } from "../../../../PropTypes/PropTypeValidation";

const BotaoExcluir = ({ funcao, id, loader }) => {
  return (
    <button
      onClick={(e) => {
        funcao(e, id);
      }}
      className={`w-[30%] text-sm bg-teal-500 hover:scale-105 transition-all rounded-[.3rem] py-1.5 flex justify-center items-center ${loader && "py-2"}`}
    >
      {
        loader ?
          <TailSpinLoader
            cor={`#F7F7F7`}
            tamanho={21}
            velocidade={.9}
          />
          :
          <Trash2
            size={22}
            strokeWidth={2.5}
          />
      }
    </button>
  )
}

BotaoExcluir.propTypes = botaoExcluirProdVendaPropType;

export default BotaoExcluir