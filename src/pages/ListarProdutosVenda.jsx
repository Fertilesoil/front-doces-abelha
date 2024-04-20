/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { ProdutoVendaContext } from "../contexts/ProdutosContexts/ProdutosVenda/ProdutoVendaContext";
import CardProdutoVenda from "../components/produtosVenda/CardProdutoVenda";
import { Api } from "../services/Api";
import toast from "react-hot-toast";
import SpiralLoader from "../components/loaders/SpiralLoader";

const ListarProdutosVenda = () => {

  const {
    setAtivoCard,
    produtos,
    setProdutos,
    loading,
    setLoading } = useContext(ProdutoVendaContext);

  const listarProdutos = async () => {
    setLoading(true);
    try {
      const todosProdutos = await Api.get("/api/listarProdutosVenda");

      setProdutos(todosProdutos.data);
      setLoading(false);
      toast.success("Produtos carregados com sucesso");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  }

  useEffect(() => {
    if (produtos.length === 0) {
      listarProdutos();
    }
  }, []);

  useEffect(() => {
    setAtivoCard(true);
    return () => {
      setAtivoCard(false);
    }
  }, []);

  return (
    <section className="grid grid-cols-3 grid-rows-subgrid place-items-center gap-7 my-4">
      {
        loading ?
          <div className="flex items-center justify-center h-[80vh] w-[80vw] absolute right-40 bottom-12">
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