import { botaoEditarProdVendaPropType } from "../../../../PropTypes/PropTypeValidation";
import { TailSpinLoader } from "../../../loaders/TailSpinLoader";


const BotaoEditar = ({ funcao, id, produto, loader }) => {
  return (
    <button
      onClick={(e) => {
        funcao(e, id, produto);
      }}
      className={`flex items-center justify-center text-sm w-[30%] bg-orange-500 font-[600] hover:scale-105 transition-all rounded-[.3rem] py-1.5 ${loader && "py-2"}`}
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

BotaoEditar.propTypes = botaoEditarProdVendaPropType;

export default BotaoEditar