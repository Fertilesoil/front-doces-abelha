import { create } from "zustand"
import { Api } from "../services/Api";
import toast from "react-hot-toast";


const carrinho = (set) => ({
  carrinho: [],
  totalDiario: null,
  itens: [],
  total_venda: 0,

  buscarTotalDiario: async () => {
    try {
      const { data } = await Api.get("/api/vendas/diario");

      set(() => ({ totalDiario: data.total_dia }));
    } catch (error) {
      toast.error(error.message);
    }
  },
  calcularTotal: (itens) => {
    const total = itens.reduce((acc, atual) => {
      return acc + (atual.preco * (atual.quantidade_venda || 1));
    }, 0);

    set(() => ({ total_venda: total }));
  },
  aumentarProduto: (produtoId) => {
    set((state) => {
      const itensAtualizados = state.itens.map((item) => {
        if (item.id === produtoId) {
          return { ...item, quantidade_venda: (item.quantidade_venda || 1) + 1 };
        }
        return item;
      });
      return { itens: itensAtualizados };
    });
  },
  diminuirProduto: (produtoId) => {
    set((state) => {
      const itensAtualizados = state.itens.map((item) => {
        if (item.id === produtoId) {
          const novaQuantidade = (item.quantidade_venda || 1) - 1;
          return { ...item, quantidade_venda: Math.max(novaQuantidade, 1) };
        }
        return item;
      });
      return { itens: itensAtualizados };
    })
  },
  excluirProduto: (produtoId) => {
    set((state) => {
      const filtrado = state.itens.filter(item => item.id !== produtoId);
      return { itens: filtrado }
    })
  },
  esvaziarCarrinho: () => {
    set(state => {
      state.itens = [];
      return state.itens;
    });
  },
  finalizarVenda: () => {
    set(state => {
      const carrinhoFormatado = state.itens.map(item => ({
        produto_venda_id: item.id,
        quantidade: item.quantidade_venda || 1,
        total_item: item.preco * (item.quantidade_venda || 1)
      }))

      const novoCarrinho = {
        total_venda: state.total_venda,
        itens: carrinhoFormatado
      }

      return { carrinho: novoCarrinho };
    })
  }
})

export const useCarrinhoStore = create(carrinho);