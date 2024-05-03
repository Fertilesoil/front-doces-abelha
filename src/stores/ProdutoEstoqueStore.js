import toast from "react-hot-toast";
import { create } from "zustand"
import { Api } from "../services/Api";


const produtoEstoque = (set) => ({
  produtos: [],
  loading: false,

  enviarFormulario: async (e, produto) => {
    e.preventDefault();
    set(() => ({ loading: true }));
    try {

      produto.preco = Number(produto.preco)
      produto.quantidade_estoque = Number(produto.quantidade_estoque)

      const produtoEstoque = await Api.post("/api/criarProduto", produto)
        .then(data => console.log(data))
        .catch(err => console.error(err));

      set(() => ({ loading: false }));
      toast.success("Produto registrado com sucesso!");
      return null;
    } catch (error) {
      set(() => ({ loading: false }));
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  },
})

export const useProdutoEstoqueStore = create(produtoEstoque);