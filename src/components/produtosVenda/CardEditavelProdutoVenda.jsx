/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { ProdutoVendaContext } from "../../contexts/ProdutosContexts/ProdutosVenda/ProdutoVendaContext";
import { Trash2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import SpiralLoader from "../loaders/SpiralLoader";
import { TailSpinLoader } from "../loaders/TailSpinLoader";
import toast from "react-hot-toast";
import { Api } from "../../services/Api";
import DropDown from "../shared/DropDown";


const CardEditavelProdutoVenda = () => {

  const {
    setAtivoEditar,
    recheios,
    produto,
    ativoBotaoEditar,
    ativoBotaoExcluir,
    loadProduto,
    listarRecheios,
    atualizarProduto,
    deletarProduto,
    setLoadProduto,
    setProduto } = useContext(ProdutoVendaContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const [produtoAtualizado, setProdutoAtualizado] = useState(null);

  console.log(produtoAtualizado);

  const [carregando, setCarregando] = useState(true);

  const buscarProduto = async () => {
    setLoadProduto(true);
    try {
      const produtoAchado = await Api.get(`/api/listarProdutosVenda/${id}`);

      setProduto(produtoAchado.data);
      const { recheio, id: id_objeto, ...novoObjeto } = produtoAchado.data;
      setProdutoAtualizado(novoObjeto);
      setLoadProduto(false);
      toast.success(`Produto encontrado com sucesso!`);
    } catch (error) {
      setLoadProduto(false);
      toast.error(error.message);
    }
  }

  const guardarValores = (e) => {
    let nome = e.target.name;
    let valor = e.target.value;

    setProdutoAtualizado({
      ...produtoAtualizado,
      [nome]: valor
    })
  }

  useEffect(() => {
    if (id === ":id") {
      navigate("/produtosVenda");
    }

    setAtivoEditar(true);

    if (recheios.length === 0) {
      listarRecheios();
    }

    if (recheios.length > 0)
      setCarregando(false);

    buscarProduto();
    return () => {
      setAtivoEditar(false);
    }
  }, [id, recheios.length]);

  return (
    <section className="h-[80vh] flex justify-center items-center">

      <form
        className="ring-4 ring-teal-200 focus-within:border-teal-400 rounded-md shadow-xl w-[50%] h-[70%] p-4 flex flex-col justify-center gap-5 items-center font-ManRope bg-teal-50 transition-all text-slate-600">

        {
          loadProduto ?
            <SpiralLoader
              cor={`#14B8A6`}
              tamanho={150}
              velocidade={1.1}
            />
            :
            <>
              <legend className="text-xl text-slate-600 text-nowrap font-bold">
                Toque em cada campo para editar as informações do produto
              </legend>

              <div className="flex justify-center items-center w-full gap-4">
                <h4 className="font-medium text-lg">Novo nome do produto</h4>
                <input
                  name="nome"
                  onChange={guardarValores}
                  placeholder={`${produto?.nome}`}
                  type="text"
                  className=" font-bold text-xl leading-3 text-center flex-1 shrink-0 ring-2 ring-teal-300"
                />
              </div>

              <input
                name="descricao"
                onChange={guardarValores}
                type="text"
                placeholder={`${produto?.descricao}`}
                className="text-sm text-balance text-center bg-teal-100 w-full rounded-md font-[500] leading-5 p-1"
              />

              <div className="flex justify-center items-center gap-5 w-full">
                <div className="flex flex-col justify-center items-center">
                  <h6 className="font-medium text-sm ">Peso do produto</h6>
                  <input
                    name="peso"
                    onChange={guardarValores}
                    placeholder={`${produto?.peso}`}
                    type="number"
                    className="border-4 border-teal-100 rounded-md p-2 w-full flex items-center justify-center placeholder:text-sm"
                  />
                </div>

                <div className="flex flex-col justify-center items-center">
                  <h6 className="font-medium text-sm ">Preço do produto</h6>
                  <input
                    name="preco"
                    onChange={guardarValores}
                    placeholder={`${produto?.preco}`}
                    type="number"
                    className="border-4 border-teal-100 rounded-md p-2 w-full flex items-center justify-center placeholder:text-sm"
                  />
                </div>
              </div>

              <div className="w-full flex justify-evenly items-center">
                <div className="flex flex-col justify-center items-center">
                  <h6 className="font-medium text-sm ">Quantidade</h6>
                  <input
                    name="quantidade"
                    onChange={guardarValores}
                    placeholder={`${produto?.quantidade}`}
                    type="number"
                    className="text-sm text-balance text-center bg-teal-100 w-full rounded-md font-[500] leading-5 p-1"
                  />
                </div>

                <div className="flex flex-col justify-center items-center">
                  <h6 className="font-medium text-sm ">Atual Recheio: {produto?.recheio?.nome}</h6>

                  <DropDown
                    loading={carregando}
                    recheios={recheios}
                    posicao={`bottom-[9rem]`}
                    funcao={setProdutoAtualizado}
                    produto={produtoAtualizado}
                  />

                </div>
              </div>

              <div className="w-[80%] flex justify-around items-center text-white rounded-sm ">
                <button
                  onClick={(e) => {
                    deletarProduto(e, id);
                  }}
                  className={`w-[30%] bg-teal-300 hover:scale-105 transition-all rounded-[.3rem] py-1.5 flex justify-center items-center ${ativoBotaoExcluir && "py-2"}`}
                >
                  {
                    ativoBotaoExcluir ?
                      <TailSpinLoader
                        cor={`#F7F7F7`}
                        tamanho={21}
                        velocidade={.9}
                      />
                      :
                      <Trash2
                        size={25}
                        strokeWidth={2.5}
                      />
                  }
                </button>

                <button
                  onClick={(e) => {
                    atualizarProduto(e, id, produtoAtualizado);
                  }}
                  className={`flex items-center justify-center w-[30%] bg-teal-300 font-[600] hover:scale-105 transition-all rounded-[.3rem] py-1.5 ${ativoBotaoEditar && "py-2"}`}
                >
                  {
                    ativoBotaoEditar ?
                      <TailSpinLoader
                        cor={`#F7F7F7`}
                        tamanho={21}
                        velocidade={.9}
                      />
                      :
                      "Atualizar"
                  }

                </button>
              </div>
            </>
        }
      </form>
    </section>
  )
}

export default CardEditavelProdutoVenda