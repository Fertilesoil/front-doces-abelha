import { botaoFormularioProdVendasPropType } from "../../../../PropTypes/PropTypeValidation";
import { TailSpinLoader } from "../../../loaders/TailSpinLoader";

const BotaoFormulario = ({ funcao, produto, loader }) => {
  return (
    <button
      className={`px-5 py-1.5 bg-teal-500 text-white rounded-md font-[500] flex items-center hover:scale-105 transition-all text-sm ${loader && "px-8 py-2.5 transition-all"}`}
      onClick={(e) => {
        funcao(e, produto);
      }}
    >
      {
        loader ?
          <TailSpinLoader
            cor={`#F7F7F7`}
            tamanho={20}
          />
          : "Cadastrar"
      }
    </button>
  )
}

BotaoFormulario.propTypes = botaoFormularioProdVendasPropType;

export default BotaoFormulario