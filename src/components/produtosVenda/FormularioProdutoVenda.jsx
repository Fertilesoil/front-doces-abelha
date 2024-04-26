/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { ProdutoVendaContext } from "../../contexts/ProdutosContexts/ProdutosVenda/ProdutoVendaContext";
import { TailSpinLoader } from "../loaders/TailSpinLoader";
import FormularioWraper from "../shared/wrapers/FormularioWraper";
import DropDown from "../shared/DropDown";

const FormularioProdutoVenda = () => {

  const [produto, setProduto] = useState(null);

  const [carregando, setCarregando] = useState(true);

  const {
    setAtivoCadastrar,
    recheios,
    loading,
    listarRecheios,
    enviarFormulario } = useContext(ProdutoVendaContext);

  const guardarValores = (e) => {
    let nome = e.target.name;
    let valor = e.target.value;

    setProduto({
      ...produto,
      [nome]: valor
    })
  }

  useEffect(() => {
    setAtivoCadastrar(true);

    if (recheios.length === 0) {
      listarRecheios();
    }

    if (recheios.length > 0)
      setCarregando(false);

    return () => {
      setAtivoCadastrar(false);
    }
  }, [recheios.length]);

  return (
    <FormularioWraper>
      <form className="border-4 border-teal-200 focus-within:border-teal-400 rounded-md shadow-xl w-[30%] h-[85%] flex flex-col justify-center gap-5 items-center font-ManRope bg-teal-50 transition-all">

        <legend className="text-xl font-bold text-slate-600">
          Informações do produto de venda
        </legend>

        <div className="flex justify-between items-center text-slate-600 font-[600] border-3 border-red-300 w-[80%]">
          <h3>Nome</h3>
          <input
            type="text"
            name="nome"
            className="focus:bg-teal-400 p-1 bg-teal-300 rounded-md text-stone-100 appearance-none"
            onChange={guardarValores}
          />
        </div>

        <div className="flex justify-between items-center text-slate-600 font-[600] border-3 border-red-300 w-[80%]">
          <h3>Descrição</h3>
          <input
            type="text"
            name="descricao"
            className="focus:bg-teal-400 p-1 bg-teal-300 rounded-md text-stone-100 appearance-none"
            onChange={guardarValores}
          />
        </div>

        <div className="flex justify-between items-center text-slate-600 font-[600] border-3 border-red-300 w-[80%]">
          <h3>Peso</h3>
          <input
            type="number"
            name="peso"
            className="focus:bg-teal-400 p-1 bg-teal-300 rounded-md text-stone-100 appearance-none"
            onChange={guardarValores}
          />
        </div>

        <div className="flex justify-between items-center text-slate-600 font-[600] border-3 border-red-300 w-[80%]">
          <h3>Preço</h3>
          <input
            type="number"
            name="preco"
            className="focus:bg-teal-400 p-1 bg-teal-300 rounded-md text-stone-100 appearance-none"
            onChange={guardarValores}
          />
        </div>

        <div className="flex justify-between items-center text-slate-600 font-[600] border-3 border-red-300 w-[80%]">
          <h3>Quantidade</h3>
          <input
            type="number"
            name="quantidade"
            className="focus:bg-teal-400 p-1 bg-teal-300 rounded-md text-stone-100 appearance-none"
            onChange={guardarValores}
          />
        </div>

        <div className="flex justify-between items-center text-slate-600 font-[600] border-3 border-red-300 w-[80%]">
          <h3>Recheio</h3>

          <DropDown
            loading={carregando}
            recheios={recheios}
            posicao={`bottom-[7.3rem]`}
            funcao={setProduto}
            produto={produto}
          />

        </div>

        <button
          className={`px-5 py-1.5 bg-teal-500 text-white rounded-md font-[500] flex items-center hover:scale-105 transition-all ${loading && "px-8 py-2.5 transition-all"}`}
          onClick={(e) => {
            enviarFormulario(e, produto);
          }}
        >
          {
            loading ?
              <TailSpinLoader
                cor={`#F7F7F7`}
                tamanho={20}
              />
              : "Cadastrar"
          }
        </button>

      </form >
    </FormularioWraper>
  )
}

export default FormularioProdutoVenda