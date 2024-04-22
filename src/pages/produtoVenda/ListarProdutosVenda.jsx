/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { ProdutoVendaContext } from "../../contexts/ProdutosContexts/ProdutosVenda/ProdutoVendaContext";
import CardProdutoVenda from "../../components/produtosVenda/CardProdutoVenda";
import SpiralLoader from "../../components/loaders/SpiralLoader";

const ListarProdutosVenda = () => {

  const {
    setAtivoCard,
    produtos,
    loading,
    listarProdutos } = useContext(ProdutoVendaContext);

  useEffect(() => {
    setAtivoCard(true);

    if (produtos.length === 0) {
      listarProdutos();
    }

    return () => {
      setAtivoCard(false);
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