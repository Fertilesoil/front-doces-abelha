import { shallow } from "zustand/shallow";
import SpiralLoader from "../../components/loaders/SpiralLoader"
import { useProdutoEstoqueStore } from "../../stores/ProdutoEstoqueStore"
import { useCallback, useLayoutEffect } from "react";
import CardProdutoEstoque from "../../components/produtosEstoque/CardProdutoEstoque";


const ListarProdutoEstoque = () => {

  const loading = useProdutoEstoqueStore(state => state.loading);
  const produtos = useProdutoEstoqueStore(state => state.produtos);
  const listar = useProdutoEstoqueStore(state => state.listarProdutos);

  const filtered = produtos.toSorted((a, b) => a.nome.localeCompare(b.nome), shallow);

  const listarProdutos = useCallback(() => {
    listar();
  }, [listar]);
  
  useLayoutEffect(() => {
    if (produtos.length === 0) {
      listarProdutos();
    }
  },[produtos.length, listarProdutos]);

  return (
    <section className="grid grid-cols-3 grid-rows-subgrid place-items-center gap-x-1 gap-y-7 my-4">
      {
        loading ?
          <div className="flex items-center justify-center h-[80vh] w-[80vw] absolute right-40 bottom-12 -z-10">
            <SpiralLoader
              cor="#F97316"
              tamanho={200}
              velocidade={1.1}
            />
          </div>
          :
          <CardProdutoEstoque produtos={filtered} />
      }
    </section>
  )
}

export default ListarProdutoEstoque