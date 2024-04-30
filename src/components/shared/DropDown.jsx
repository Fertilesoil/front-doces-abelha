import { useCallback, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { dropDownPropType } from "../../PropTypes/PropTypeValidation";
import "./DropDown.css";

const DropDown = ({ loading, recheios, posicao, funcao, produto }) => {

  const [expandido, setExpandido] = useState(false);

  const [texto, setTexto] = useState(`Escolha o recheio`);

  const recheioEscolhido = useCallback(
    async (e) => {
      e.preventDefault();

      const recheio = e.target.textContent;
      setTexto(recheio);
      setExpandido(expandido => !expandido);

      let recheioAtual = await recheios.find(recheio => recheio.nome === e.target.textContent);
      funcao({ ...produto, recheio_id: recheioAtual.id })
    }, [funcao, produto, recheios]);

  const toggle = (e) => {
    e.preventDefault();
    setExpandido(expandido => !expandido);
  };

  return (
    <div>
      <button
        disabled={loading}
        onClick={(e) => toggle(e)}
        className="text-sm min-w-52 disabled:bg-slate-400 bg-teal-400 hover:bg-teal-500 px-3 py-1 rounded-lg text-white flex items-center justify-between transition-all duration-[.37s]">
        {texto}
        <div>
          {expandido ? <ChevronUp size={27} className="animate-slide-up" /> : <ChevronDown size={27} className="animate-slide-down" />}
        </div>
      </button>

      {
        expandido &&
        <div
          className={` bar animate-slide-down bg-teal-400 rounded-lg ${posicao} min-w-52 absolute max-h-[6rem] overflow-y-auto overflow-x-hidden flex flex-col transition-all duration-[.37s] shadow-md`}>
          {recheios?.map(recheio => (
            <button
              onClick={(e) => recheioEscolhido(e)}
              className="`text-sm min-w-52 bg-teal-400 hover:bg-teal-500 px-3 py-1  text-white cursor-pointer transition-all duration-[.37s] z-10"
              key={recheio.id}>{recheio.nome}
            </button>
          ))}
        </div>
      }
    </div>
  )
}

DropDown.propTypes = dropDownPropType;

export default DropDown