import { Trash2 } from "lucide-react";
import { TailSpinLoader } from "../../../loaders/TailSpinLoader";
import { recheioBotaoExcluirPropType } from "../../../../PropTypes/PropTypeValidation";


const BotaoExcluir = ({ loader, funcao, id }) => {
  return (
    <button
      className={`w-[30%] bg-pink-500 hover:scale-105 transition-all rounded-[.3rem] py-[.40rem] flex justify-center items-center ${loader && "py-2"}`}
      onClick={() => {
        funcao(id);
      }}
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
            size={23}
            strokeWidth={2.5}
          />
      }
    </button>
  )
}

BotaoExcluir.propTypes = recheioBotaoExcluirPropType;

export default BotaoExcluir