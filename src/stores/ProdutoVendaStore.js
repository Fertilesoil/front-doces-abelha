/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import { create } from "zustand";
import { Api } from "../services/Api";


const produtoVenda = (set) => ({
  produtos: [],
  loading: false,
  ativoCard: false,
  ativoCadastrar: false,
  ativoEditar: false,

  setCard: () => set(state => ({ ativoCard: !state.ativoCard })),
  setCadastrar: () => set(state => ({ ativoCadastrar: !state.ativoCadastrar })),
  setEditar: () => set(state => ({ ativoEditar: !state.ativoEditar })),
  setLoading: () => set(state => ({ loading: !state.loading })),

  enviarFormulario: async (e, produto) => {
    e.preventDefault();
    useProdutoVendaStore.setState(state => ({ loading: !state.loading }));
    try {

      Number(produto.peso)
      Number(produto.preco)
      Number(produto.quantidade)

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

  atualizarProdutos: async () => {
    set((state) => ({ loading: !state.loading }));
    try {
      const { data } = await Api.get("/api/listarProdutosVenda");
      data.reverse();
      set(() => ({ produtos: [...data] }))
      set((state) => ({ loading: !state.loading }));
    } catch (error) {
      set((state) => ({ loading: !state.loading }));
      toast.error("Erro ao atualizar os produtos")
    }
  },

  listarProdutos: async () => {
    set(() => ({ loading: true }));
    try {
      const { data } = await Api.get("/api/listarProdutosVenda");

      data.reverse();
      set(() => ({ produtos: [...data] }));
      set(() => ({ loading: false }));
      toast.success("Produtos carregados com sucesso");
    } catch (error) {
      set(() => ({ loading: false }));
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  },
})

export const useProdutoVendaStore = create(produtoVenda);
