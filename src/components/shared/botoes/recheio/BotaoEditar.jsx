import { recheioBotaoExcluirPropType } from "../../../../PropTypes/PropTypeValidation";
import { TailSpinLoader } from "../../../loaders/TailSpinLoader";

const BotaoEditar = ({loader, funcao, id, recheio}) => {
  return (
    <button
      className={`flex items-center justify-center w-[30%] bg-pink-500 font-[600] hover:scale-105 transition-all rounded-[.3rem] py-[.45rem] text-sm ${loader && "py-2"}`}
      onClick={() => {
        funcao(id, recheio);
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
          "Atualizar"
      }
    </button>
  )
}

BotaoEditar.propTypes = recheioBotaoExcluirPropType;

export default BotaoEditar