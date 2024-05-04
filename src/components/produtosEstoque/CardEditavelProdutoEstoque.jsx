/* eslint-disable no-unused-vars */
import { useCallback, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProdutoEstoqueStore } from "../../stores/ProdutoEstoqueStore";
import SpiralLoader from "../loaders/SpiralLoader";
import BotaoExcluir from "../shared/botoes/produtosEstoque/BotaoExcluir";
import BotaoEditar from "../shared/botoes/produtosEstoque/BotaoEditar";

const CardEditavelProdutoEstoque = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const produto = useProdutoEstoqueStore(state => state.produto);
  const produtos = useProdutoEstoqueStore(state => state.produtos);
  const loadingProduto = useProdutoEstoqueStore(state => state.loadingProduto);
  const buscarProduto = useProdutoEstoqueStore(state => state.buscarProduto);
  const deletarProduto = useProdutoEstoqueStore(state => state.deletarProduto);
  const atualizarProduto = useProdutoEstoqueStore(state => state.atualizarProduto);
  const atualizarModificados = useProdutoEstoqueStore(state => state.atualizarProdutosModificados);
  const ativoBotaoExcluir = useProdutoEstoqueStore(state => state.botaoExcluir);
  const ativoBotaoEditar = useProdutoEstoqueStore(state => state.botaoEditar);

  const [produtoAtualizado, setProdutoAtualizado] = useState(null);

  let produtoEncontrado = produtos.find(produto => produto.id === id);

  const guardarValores = useCallback((e) => {
    let nome = e.target.name;
    let valor = e.target.value;

    setProdutoAtualizado({
      ...produtoAtualizado,
      [nome]: valor,
    })

    produtoEncontrado[nome] = valor;
  }, [produtoAtualizado, produtoEncontrado]);

  useLayoutEffect(() => {
    if (id === ":id") {
      navigate("/produtosEstoque");
    }

    const buscar = buscarProduto(id);
    buscar.then((data) => {
      setProdutoAtualizado(data);
    })
  }, [id, buscarProduto, navigate]);


  return (
      <form
        className="ring-4 ring-orange-200 focus-within:border-orange-400 rounded-md shadow-xl w-[50%] h-[70%] p-4 flex flex-col justify-center gap-5 items-center font-ManRope bg-orange-50 transition-all text-slate-600">

        {
          loadingProduto ?
            <SpiralLoader
              cor={`#F97316`}
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
                  className=" font-bold text-xl leading-3 rounded-md text-center flex-1 shrink-0 ring-2 ring-orange-300"
                />
              </div>

              <input
                name="descricao"
                onChange={guardarValores}
                type="text"
                placeholder={`${produto?.descricao}`}
                className="text-sm text-balance text-center bg-orange-100 w-full rounded-md font-[500] leading-5 p-1"
              />

              <div className="flex justify-center items-center gap-5 w-full">
                <div className="flex flex-col justify-center items-center">
                  <h6 className="font-medium text-sm ">Preço do produto</h6>
                  <input
                    name="preco"
                    onChange={guardarValores}
                    placeholder={`${produto?.preco}`}
                    type="number"
                    className="border-4 border-orange-100 rounded-md p-2 w-full flex items-center justify-center placeholder:text-sm"
                  />
                </div>

                <div className="flex flex-col justify-center items-center">
                  <h6 className="font-medium text-sm ">Quantidade</h6>
                  <input
                    name="quantidade_estoque"
                    onChange={guardarValores}
                    placeholder={`${produto?.quantidade_estoque}`}
                    type="number"
                    className="border-4 border-orange-100 rounded-md p-2 w-full flex items-center justify-center placeholder:text-sm"
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
                      navigate("/produtosEstoque/produtos");
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
                      navigate("/produtosEstoque/produtos");
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
  )
}

export default CardEditavelProdutoEstoque