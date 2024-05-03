import { campoFormularioProdVendasPropType } from "../../../../PropTypes/PropTypeValidation"

const CampoFormulario = ({ titulo, type, name, funcao, cor, corFocus }) => {
  return (
    <div className="flex justify-between items-center text-slate-600 font-[600] w-[80%]">
      <h3>{titulo}</h3>
      <input
        type={type}
        name={name}
        className={`focus:${corFocus}bg-teal-400 p-1 ${cor} rounded-md text-stone-100 appearance-none`}
        onChange={funcao}
      />
    </div>
  )
}

CampoFormulario.propTypes = campoFormularioProdVendasPropType;

export default CampoFormulario;