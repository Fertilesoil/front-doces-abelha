/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import { create } from "zustand";
import { Api } from "../services/Api";

const produtoVenda = (set) => ({
  produtos: [],
  produto: null,
  produtoEncontrado: null,
  loading: false,
  loadingProduto: false,
  botaoEditar: false,
  botaoExcluir: false,

  setLoading: () => set(state => ({ loading: !state.loading })),

  enviarFormulario: async (e, produto) => {
    e.preventDefault();
    useProdutoVendaStore.setState(state => ({ loading: !state.loading }));
    try {

      produto.peso = Number(produto.peso)
      produto.preco = Number(produto.preco)
      produto.quantidade = Number(produto.quantidade)

      const produtoVenda = await Api.post("/api/cadastrarProdutosVenda", produto);

      useProdutoVendaStore.setState(state => ({ loading: !state.loading }));
      toast.success("Produto registrado com sucesso!");
      return null;
    } catch (error) {
      useProdutoVendaStore.setState(state => ({ loading: !state.loading }));
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  },

  atualizarProdutosModificados: async (produto) => {
    set(() => ({ produtos: [...produto] }))
  },

  atualizarProdutos: async (produto) => {
    set((state) => ({ produtos: [...state.produtos, produto] }))
  },

  listarProdutos: async () => {
    set(() => ({ loading: true }));
    try {
      const { data } = await Api.get("/api/listarProdutosVenda");

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
      const { data } = await Api.get(`/api/listarProdutosVenda/${id}`);

      set(() => ({ produto: data }));
      const { recheio, id: id_objeto, ...novoObjeto } = data;
      set(() => ({ loadingProduto: false }));
      toast.success(`Produto encontrado com sucesso!`);
      return novoObjeto;
    } catch (error) {
      set(() => ({ loadingProduto: false }));
      toast.error(error.message);
    }
  },

  atualizarProduto: async (e, id, produtoAtualizado) => {
    e.preventDefault();
    set(() => ({ botaoEditar: true }));
    try {

      if (produtoAtualizado.preco)
        produtoAtualizado.preco = Number(produtoAtualizado.preco);

      if (produtoAtualizado.quantidade)
        produtoAtualizado.quantidade = Number(produtoAtualizado.quantidade);

      if (produtoAtualizado.peso)
        produtoAtualizado.peso = Number(produtoAtualizado.peso);

      const atualizado = await Api.put(`/api/atualizarProdutoVenda/${id}`, produtoAtualizado);

      set(() => ({ botaoEditar: false }));
      toast.success("Produto atualizado com sucesso!");
      return null;
    } catch (error) {
      set(() => ({ botaoEditar: false }));
      toast.error(error.message);
    }
  },

  deletarProduto: async (e, id) => {
    e.preventDefault();
    set(() => ({ botaoExcluir: true }));
    try {
      const excluido = await Api.delete(`/api/deletarProdutoVenda/${id}`);

      set(() => ({ botaoExcluir: false }));
      toast.success("Produto excluído com sucesso!");
      return null;
    } catch (error) {
      set(() => ({ botaoExcluir: false }));
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  }
})

export const useProdutoVendaStore = create(produtoVenda);