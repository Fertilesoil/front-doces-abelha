/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useLayoutEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import SpiralLoader from "../loaders/SpiralLoader";
import DropDown from "../shared/DropDown";
import BotaoEditar from "../shared/botoes/produtosVenda/BotaoEditar";
import BotaoExcluir from "../shared/botoes/produtosVenda/BotaoExcluir";
import { useProdutoVendaStore } from "../../stores/ProdutoVendaStore";
import { useRecheioStore } from "../../stores/RecheioStore";
import { shallow } from "zustand/shallow";

const CardEditavelProdutoVenda = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const produto = useProdutoVendaStore(state => state.produto);
  const produtos = useProdutoVendaStore(state => state.produtos);
  const loadingProduto = useProdutoVendaStore(state => state.loadingProduto);
  const buscarProduto = useProdutoVendaStore(state => state.buscarProduto);
  const ativoBotaoEditar = useProdutoVendaStore(state => state.botaoEditar);
  const ativoBotaoExcluir = useProdutoVendaStore(state => state.botaoExcluir);
  const atualizarProduto = useProdutoVendaStore(state => state.atualizarProduto);
  const deletarProduto = useProdutoVendaStore(state => state.deletarProduto);
  const atualizarModificados = useProdutoVendaStore(state => state.atualizarProdutosModificados);

  const loading = useRecheioStore(state => state.loading);
  const recheios = useRecheioStore(state => state.recheios);
  const listar = useRecheioStore(state => state.listarRecheios);
  const filtered = recheios.toSorted((a, b) => a.nome.localeCompare(b.nome), shallow);

  let produtoEncontrado = produtos.find(produto => produto.id === id);

  const listarRecheios = useCallback(() => {
    listar();
  }, []);

  const [produtoAtualizado, setProdutoAtualizado] = useState(null);

  const guardarValores = useCallback((e) => {
    let nome = e.target.name;
    let valor = e.target.value;

    setProdutoAtualizado({
      ...produtoAtualizado,
      [nome]: valor,
    })

    produtoEncontrado[nome] = valor;
  });

  useLayoutEffect(() => {
    if (id === ":id") {
      navigate("/produtosVenda");
    }

    if (recheios.length === 0) {
      listarRecheios();
    }

    const buscar = buscarProduto(id);
    buscar.then((data) => {
      setProdutoAtualizado(data);
    });
  }, [id, recheios.length]);

  return (
    <section className="h-[80vh] flex justify-center items-center">

      <form
        className="ring-4 ring-teal-200 focus-within:border-teal-400 rounded-md shadow-xl w-[50%] h-[70%] p-4 flex flex-col justify-center gap-5 items-center font-ManRope bg-teal-50 transition-all text-slate-600">

        {
          loadingProduto ?
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
                  className=" font-bold text-xl leading-3 rounded-md text-center flex-1 shrink-0 ring-2 ring-teal-300"
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
                    loading={loading}
                    recheios={filtered}
                    posicao={`bottom-[9rem]`}
                    funcao={setProdutoAtualizado}
                    produto={produtoAtualizado}
                    produtoEncontrado={produtoEncontrado}
                  />

                </div>
              </div>

              <div className="w-[80%] flex justify-evenly items-center text-white rounded-sm ">
                <BotaoExcluir
                  funcao={async (e) => {
                    const deletar = await deletarProduto(e, id);
                    if (deletar === null) {
                      const novoArray = produtos.filter(produto => produto.id !== id);
                      await atualizarModificados(novoArray);
                      navigate("/produtosVenda/produtos");
                    }
                  }}
                  id={id}
                  loader={ativoBotaoExcluir}
                />

                <BotaoEditar
                  funcao={async (e) => {
                    const atualizar = await atualizarProduto(e, id, produtoAtualizado);
                    if (atualizar === null) {
                      let novoArray = produtos.find(produto => produto.id === id);
                      novoArray = produtoEncontrado;
                      navigate("/produtosVenda/produtos");
                    }
                  }}
                  id={id}
                  produto={produtoAtualizado}
                  loader={ativoBotaoEditar}
                />
              </div>
            </>
        }
      </form>
    </section>
  )
}

export default CardEditavelProdutoVenda