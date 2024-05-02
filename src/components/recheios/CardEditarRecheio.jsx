/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import SpiralLoader from "../loaders/SpiralLoader";
import { idPropType } from "../../PropTypes/PropTypeValidation";
import BotaoEditar from "../shared/botoes/recheio/BotaoEditar";
import BotaoExcluir from "../shared/botoes/recheio/BotaoExcluir";
import { useRecheioStore } from "../../stores/RecheioStore";
import { useNavigate } from "react-router-dom";
import { useProdutoVendaStore } from "../../stores/ProdutoVendaStore";

const EditarRecheio = ({ id }) => {

  const navigate = useNavigate();

  const [recheioAtualizado, setRecheioAtualizado] = useState({
    nome: ""
  });

  const listarProdutos = useProdutoVendaStore(state => state.listarProdutos);

  const recheios = useRecheioStore(state => state.recheios);
  const recheio = useRecheioStore(state => state.recheioEncontrado);
  const loading = useRecheioStore(state => state.loading);
  const loadAtualizar = useRecheioStore(state => state.loadAtualizar);
  const loadExcluir = useRecheioStore(state => state.loadExcluir);
  const atualizarRecheio = useRecheioStore(state => state.atualizarRecheio);
  const deletarRecheio = useRecheioStore(state => state.deletarRecheio);

  const atualizado = recheios.find(recheio => recheio.id === id);

  return (
    <div className="flex flex-col justify-center items-center gap-3 ring ring-pink-200 rounded-md bg-pink-50 w-[24rem] min-h-32 h-44 font-ManRope focus-within:ring-pink-400 transition-all duration-[.37s] shadow-sm">

      {loading ?
        <SpiralLoader
          cor="#EC4899"
          tamanho={80}
          velocidade={1}
        /> :
        <>
          <div className="flex items-center justify-center gap-2 w-[100%]">
            <span className="rounded-lg w-2 h-2 bg-pink-400 ring-2 ring-pink-300">

            </span>

            <h3 className="whitespace-nowrap overflow-hidden text-center font-[600] text-slate-500 leading-4">
              {recheio?.id}
            </h3>
          </div>

          <h2 className="font-bold text-xl text-slate-600">
            {recheio?.nome}
          </h2>

          <input
            type="text"
            className="ring-2 ring-pink-200 p-[.2rem] w-[80%] focus:ring focus:ring-pink-300 text-slate-600 placeholder:font-[500] font-[500] rounded-sm transition-all duration-[.37s]"
            onChange={(e) => setRecheioAtualizado({ ...recheioAtualizado, nome: e.target.value })}
            placeholder="Novo nome..."
          />

          <div className="w-[80%] flex justify-around items-center text-white rounded-sm">
            <BotaoExcluir
              loader={loadExcluir}
              funcao={async () => {
                await deletarRecheio(id);
                if (deletarRecheio) {
                  const novosRecheios = recheios.filter(recheio => recheio !== atualizado);
                  useRecheioStore.setState(() => ({ recheios: [...novosRecheios] }));
                  listarProdutos();
                }
                navigate("/recheios/listar");
              }}
              id={id}
            />

            <BotaoEditar
              loader={loadAtualizar}
              funcao={async () => {
                await atualizarRecheio(id, recheioAtualizado);
                if (atualizarRecheio) {
                  atualizado.nome = recheioAtualizado.nome;
                  listarProdutos();
                  navigate("/recheios/listar");
                }
              }}
              id={id}
              recheio={recheioAtualizado}
            />
          </div>
        </>
      }
    </div>
  )
}

EditarRecheio.propTypes = idPropType;

export default EditarRecheio