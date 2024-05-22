import { create } from "zustand"
import { Api } from "../services/Api";
import toast from "react-hot-toast";


const carrinho = (set) => ({
  carrinho: [],
  totalDiario: null,
  itensVenda: null,

  buscarTotalDiario: async () => {
    try {
      const { data } = await Api.get("/api/vendas/diario");

      // console.log(typeof data);
    } catch (error) {
      toast.error(error.message);
    }
  }
})

export const useCarrinhoStore = create(carrinho);