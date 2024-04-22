/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react";
import { RecheioContext } from "../../contexts/RecheioContext/RecheioContext";
import BotaoFormulario from "../shared/botoes/recheio/BotaoFormulario";

const FormularioRecheio = () => {

  const [recheio, setRecheio] = useState({
    nome: ""
  });

  const { cadastrarRecheio, loading } = useContext(RecheioContext);

  return (
    <form className="border-4 border-pink-200 focus-within:border-pink-400 rounded-md shadow-xl w-[40%] h-[30%] flex flex-col justify-center gap-5 items-center font-ManRope bg-pink-50 transition-all">

      <legend
        className="text-lg font-bold text-slate-600"
      >
        Qual o nome do recheio que você gostaria de cadastrar?
      </legend>

      <input
        type="text"
        className="border-2 p-[.5rem] w-[80%] focus:ring focus:ring-pink-300 text-slate-700 font-[500] rounded-sm"
        placeholder="Recheio..."
        onChange={e => setRecheio({ ...recheio, nome: e.target.value })}
      />

      <BotaoFormulario
        loader={loading}
        funcao={cadastrarRecheio}
        recheio={recheio}
      />
    </form>
  )
}

export default FormularioRecheio