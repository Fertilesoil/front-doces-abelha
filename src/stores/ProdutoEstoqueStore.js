/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import { create } from "zustand"
import { Api } from "../services/Api";

const produtoEstoque = (set) => ({
  produtos: [],
  produto: null,
  loading: false,
  loadingProduto: false,
  botaoExcluir: false,
  botaoEditar: false,

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

  listarProdutos: async () => {
    set(() => ({ loading: true }));
    try {
      const { data } = await Api.get("/api/listarProdutos");

      set(() => ({ produtos: [...data] }));
      set(() => ({ loading: false }));
      toast.success("Produtos carregados com sucesso");
    } catch (error) {
      set(() => ({ loading: false }));
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  },

  buscarProduto: async (id) => {
    set(() => ({ loadingProduto: true }));
    try {
      const { data } = await Api.get(`/api/listarProdutos/${id}`);

      set(() => ({ loadingProduto: false }));
      toast.success(`Produto encontrado com sucesso!`);
      set(() => ({ produto: data }));
      return data;
    } catch (error) {
      set(() => ({ loadingProduto: false }));
      toast.error(error.message);
    }
  },

  deletarProduto: async (e, id) => {
    e.preventDefault();
    set(() => ({ botaoExcluir: true }));
    try {
      const excluido = await Api.delete(`/api/deletarProduto/${id}`);

      set(() => ({ botaoExcluir: false }));
      toast.success("Produto excluído com sucesso!");
      return null;
    } catch (error) {
      set(() => ({ botaoExcluir: false }));
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  },

  atualizarProdutosModificados: async (produto) => {
    set(() => ({ produtos: [...produto] }))
  },

  atualizarProduto: async (e, id, produtoAtualizado) => {
    e.preventDefault();
    set(() => ({ botaoEditar: true }));
    try {

      if (produtoAtualizado.preco)
        produtoAtualizado.preco = Number(produtoAtualizado.preco);

      if (produtoAtualizado.quantidade)
        produtoAtualizado.quantidade_estoque = Number(produtoAtualizado.quantidade_estoque);

      const atualizado = await Api.put(`/api/atualizarProduto/${id}`, produtoAtualizado);

      set(() => ({ botaoEditar: false }));
      toast.success("Produto atualizado com sucesso!");
      return null;
    } catch (error) {
      set(() => ({ botaoEditar: false }));
      toast.error(error.message);
    }
  },
})

export const useProdutoEstoqueStore = create(produtoEstoque);