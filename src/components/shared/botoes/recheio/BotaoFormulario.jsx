import { botaoFormularioPropType } from "../../../../PropTypes/PropTypeValidation"
import { TailSpinLoader } from "../../../loaders/TailSpinLoader"

const BotaoFormulario = ({loader, funcao, recheio}) => {
  return (
    <button
      className={`px-5 py-1.5 bg-pink-300 text-white rounded-md font-[500] flex items-center hover:scale-105 transition-all ${loader && "px-7 py-2"}`}
      onClick={(e) => {
        funcao(e, recheio)
      }}
    >
      {
        loader ?
          <TailSpinLoader
            cor="#f7f7f7"
            tamanho={21}
            velocidade={.9}
          />
          : "Enviar"
      }
    </button>
  )
}

BotaoFormulario.propTypes = botaoFormularioPropType;

export default BotaoFormulario