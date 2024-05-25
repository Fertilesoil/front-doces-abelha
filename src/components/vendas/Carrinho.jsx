import { useNavigate } from "react-router-dom";
import { useCarrinhoStore } from "../../stores/CarrinhoStore"
import WrapperRegistroVenda from "../shared/wrapers/WrapperRegistroVenda"
import { useLayoutEffect } from "react";
import { BadgeMinus, BadgePlus, Trash2 } from "lucide-react";
import { Api } from "../../services/Api";
import toast from "react-hot-toast";
import { useProdutoVendaStore } from "../../stores/ProdutoVendaStore";

const Carrinho = () => {

  const navigate = useNavigate();

  const itens = useCarrinhoStore(state => state.itens);
  // const carrinho = useCarrinhoStore(state => state.carrinho);
  const calcularTotal = useCarrinhoStore(state => state.calcularTotal);
  const total = useCarrinhoStore(state => state.total_venda);
  const aumentarProduto = useCarrinhoStore(state => state.aumentarProduto);
  const diminuirProduto = useCarrinhoStore(state => state.diminuirProduto);
  const excluirProduto = useCarrinhoStore(state => state.excluirProduto);
  const esvaziarCarrinho = useCarrinhoStore(state => state.esvaziarCarrinho);
  const finalizarVenda = useCarrinhoStore(state => state.finalizarVenda);
  const listarProdutos = useProdutoVendaStore(state => state.listarProdutos);

  const registrarVenda = async () => {
    try {
      finalizarVenda();
      const carrinhoAtualizado = useCarrinhoStore.getState().carrinho
      const { data } = await Api.post("/api/vendas", carrinhoAtualizado);

      if (data) {
        useCarrinhoStore.setState((state) => ({ totalDiario: state.totalDiario + carrinhoAtualizado.total_venda }));
        useCarrinhoStore.setState(state => ({ carrinho: [] }));
        toast.success("Transação registrada com sucesso");
        esvaziarCarrinho();
        listarProdutos();
        navigate("/vendas");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useLayoutEffect(() => {
    if (itens.length === 0) {
      navigate("/vendas");
    }

    calcularTotal(itens);
  }, [itens]);

  return (
    <WrapperRegistroVenda>
      <div className="w-[50%] min-h-10 bg-emerald-50 ring-4 ring-emerald-200 rounded-lg text-zinc-700 font-Nunito shadow-xl flex flex-col gap-1">

        {itens.map(item => (
          <div
            key={item.id}
            className="w-full min-h-10 rounded-lg p-1"
          >

            <div className="flex justify-around min-h-10 items-center flex-1 w-full">

              <div className="w-full ps-6 flex flex-col gap-1">
                {/* <span className="block whitespace-nowrap font-ManRope">{item.id}</span> */}
                <span className="block text-lg">{item.nome}</span>
                <span className="block">R$ {item.preco.toFixed(2)}</span>
              </div>

              <div className="w-full flex justify-end gap-10 pe-6 text-zinc-700">
                <button onClick={() => {
                  diminuirProduto(item.id);
                }}>
                  <BadgeMinus className="cursor-pointer" size={27} />
                </button>
                {item.quantidade_venda || 1}
                <button onClick={() => {
                  aumentarProduto(item.id);
                }}>
                  <BadgePlus className="cursor-pointer" size={27} />
                </button>

                <button onClick={() => {
                  excluirProduto(item.id);
                }}>
                  <Trash2 className="cursor-pointer" size={27} />
                </button>
              </div>

            </div>

            <hr className="border-[1.7px] border-dashed w-[97%] rounded-lg border-zinc-300 mt-1 flex" />
          </div>
        ))}

        <div className="w-full min-h-14 rounded-lg flex justify-evenly items-center p-1 ps-6 text-lg font-semibold">
          <span
            className="px-7 py-[.20rem] bg-emerald-500 text-white text-base font-bold ring-2 ring-emerald-50 transition-all duration-[.25s] ease-linear rounded-md flex items-center"
          >
            Total: {total.toFixed(2)}
          </span>

          <button
            onClick={async () => {
              await registrarVenda();
            }}
            className="px-7 py-[.20rem] bg-emerald-700 text-white text-base font-bold hover:text-emerald-800 hover:bg-white hover:ring-emerald-300 ring-2 ring-emerald-200 transition-all duration-[.25s] ease-linear rounded-md flex items-center"
          >
            <span>Finalizar Venda</span>
          </button>

          <button
            onClick={() => {
              esvaziarCarrinho();
            }}
            className="px-7 py-[.20rem] bg-emerald-700 text-white text-base font-bold hover:text-emerald-800 hover:bg-white hover:ring-emerald-300 ring-2 ring-emerald-200 transition-all duration-[.25s] ease-linear rounded-md flex items-center"
          >
            <span>Limpar carrinho</span>
          </button>
        </div>
      </div>
    </WrapperRegistroVenda>
  )
}

export default Carrinho