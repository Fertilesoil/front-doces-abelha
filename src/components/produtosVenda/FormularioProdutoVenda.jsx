/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { ProdutoVendaContext } from "../../contexts/ProdutosContexts/ProdutosVenda/ProdutoVendaContext";
import toast from "react-hot-toast";
import { Api } from "../../services/Api";
import { TailSpinLoader } from "../loaders/TailSpinLoader";
import { useNavigate } from "react-router-dom";

const FormularioProdutoVenda = () => {

  const [produto, setProduto] = useState(null);

  const navigate = useNavigate();

  const {
    setAtivoCadastrar,
    recheios,
    setRecheios,
    loading,
    setLoading} = useContext(ProdutoVendaContext);

  const listarRecheios = async () => {
    try {
      const recheiosListados = await Api.get("/api/listarRecheios");

      setRecheios(recheiosListados.data);
      toast.success("Recheios prontos para seleção");
    } catch (error) {
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  }

  const guardarValores = (e) => {
    let nome = e.target.name;
    let valor = e.target.value;

    setProduto({
      ...produto,
      [nome]: valor
    })
  }

  const enviarFormulario = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {

      produto.peso = Number(produto.peso)
      produto.preco = Number(produto.preco)
      produto.quantidade = Number(produto.quantidade)

      const produtoVenda = await Api.post("/api/cadastrarProdutosVenda", produto);

      setLoading(false);
      toast.success("Produto registrado com sucesso!");
      navigate("/produtosVenda");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }

    console.log(produto);
  }

  useEffect(() => {
    if (recheios.length === 0) {
      listarRecheios();
    }
  }, []);

  useEffect(() => {
    setAtivoCadastrar(true);
    return () => {
      setAtivoCadastrar(false);
    }
  },[]);

  return (
    <div className="flex justify-center items-center h-[80vh]">

      <form className="border-4 border-teal-200 focus-within:border-teal-400 rounded-md shadow-xl w-[30%] h-[85%] flex flex-col justify-center gap-5 items-center font-ManRope bg-teal-50 transition-all">

        <legend className="text-xl font-bold text-slate-600">
          {/* Cadastre aqui seu produto de venda */}
          Informações do produto de venda
        </legend>

        <div className="flex justify-between items-center text-slate-600 font-[600] border-3 border-red-300 w-[80%]">
          <h3>Nome</h3>
          <input
            type="text"
            name="nome"
            className="focus:bg-teal-400 p-1 bg-teal-300 rounded-md text-stone-100 appearance-none"
            // onChange={(e) => setProduto({...produto, nome: e.target.value})}
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
          <select name="" id=""
            onChange={async (e) => {
              let nome = e.target.value
              let recheio = await recheios.find(recheio => recheio.nome === nome)
              setProduto({ ...produto, recheio_id: recheio.id })
            }}
          >

            <option disabled selected>
              Escolha o recheio
            </option>

            {
              recheios.map(recheio => (
                <option
                  key={recheio.id}
                >
                  {recheio.nome}
                </option>
              ))
            }

          </select>
        </div>

        <button
          className={`px-5 py-1.5 bg-teal-500 text-white rounded-md font-[500] flex items-center hover:scale-105 transition-all ${loading && "px-8 py-2.5 transition-all"}`}
          onClick={enviarFormulario}
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

    </div >
  )
}

export default FormularioProdutoVenda