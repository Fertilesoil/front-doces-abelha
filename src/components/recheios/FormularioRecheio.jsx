/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import BotaoFormulario from "../shared/botoes/recheio/BotaoFormulario";
import { useRecheioStore } from "../../stores/RecheioStore";
import { useNavigate } from "react-router-dom";

const FormularioRecheio = () => {

  const navigate = useNavigate();

  const [recheio, setRecheio] = useState({
    nome: ""
  });

  const loading = useRecheioStore(state => state.loading);
  const listarRecheios = useRecheioStore(state => state.listarRecheios);
  const cadastrarRecheio = useRecheioStore(state => state.cadastrarRecheio);

  return (
    <form className="ring-4 ring-pink-200 focus-within:ring-pink-400 rounded-md shadow-md w-[40%] h-[30%] flex flex-col justify-center gap-5 items-center font-ManRope bg-pink-50 transition-all duration-[.37s]">

      <legend
        className="text-lg font-bold text-slate-500"
      >
        Qual o nome do recheio que você gostaria de cadastrar?
      </legend>

      <input
        type="text"
        className="ring-2 ring-pink-100 p-[.5rem] w-[80%] focus:ring-pink-300 text-slate-600 font-[600] placeholder:font-[600] rounded-sm transition-all duration-[.37s]"
        placeholder="Recheio..."
        onChange={e => setRecheio({ ...recheio, nome: e.target.value })}
      />

      <BotaoFormulario
        loader={loading}
        funcao={async (e) => {
          await cadastrarRecheio(e, recheio);
          if (cadastrarRecheio) {
            await listarRecheios();
            navigate("/recheios/listar");
          }
        }}
        recheio={recheio}
      />
    </form>
  )
}

export default FormularioRecheio