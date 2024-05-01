/* eslint-disable react-hooks/exhaustive-deps */
import CardProdutoVenda from "../../components/produtosVenda/CardProdutoVenda";
import SpiralLoader from "../../components/loaders/SpiralLoader";
import { useProdutoVendaStore } from "../../stores/ProdutoVendaStore";
import { useCallback, useEffect } from "react";

const ListarProdutosVenda = () => {

  const setCard = useProdutoVendaStore(state => state.setCard);
  const produtos = useProdutoVendaStore(state => state.produtos);
  const loading = useProdutoVendaStore(state => state.loading);
  const listar = useProdutoVendaStore(state => state.listarProdutos);

  const listarProdutos = useCallback(() => {
    listar();
  },[listar]);

  useEffect(() => {
    setCard();

    if (produtos.length === 0) {
      listarProdutos();
    }

    return () => {
      setCard();
    }
  }, [produtos.length]);

  return (
    <section className="grid grid-cols-3 grid-rows-subgrid place-items-center gap-x-1 gap-y-7 my-4">
      {
        loading ?
          <div className="flex items-center justify-center h-[80vh] w-[80vw] absolute right-40 bottom-12 -z-10">
            <SpiralLoader
              cor="#14B8A6"
              tamanho={200}
              velocidade={1.1}
            />
          </div>
          :
          <CardProdutoVenda produtos={produtos} />
      }
    </section>
  )
}

export default ListarProdutosVenda