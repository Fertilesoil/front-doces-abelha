/* eslint-disable no-unused-vars */

import { create } from "zustand";
import { Api } from "../services/Api";
import toast from "react-hot-toast";

const recheio = (set) => ({
  recheios: [],
  recheioEncontrado: null,
  loading: false,
  loadAtualizar: false,
  loadExcluir: false,

  listarRecheios: async () => {
    set(() => ({ loading: true }));
    try {
      const { data } = await Api.get("/api/listarRecheios");

      set(() => ({ recheios: [...data] }));
      set(() => ({ loading: false }));
      toast.success("Recheios listados com sucesso");
    } catch (error) {
      set(() => ({ loading: false }));
      toast.error(error.message);
    }
  },
  buscarRecheioPorId: async (id) => {
    try {
      set(() => ({ loading: true }));
      const { data } = await Api.get(`/api/acharRecheio/${id}`);

      set(() => ({ recheioEncontrado: data }));
      toast.success(`Recheio encontrado: ${data.nome}`);
      set(() => ({ loading: false }));
    } catch (error) {
      set(() => ({ loading: false }));
      toast.error(error.message);
      console.log(error.message);
    }
  },
  atualizarRecheio: async (id, recheioAtualizado) => {
    set(() => ({ loadAtualizar: true }));
    try {
      const recheioNovo = await Api.put(`/api/atualizarRecheio/${id}`, recheioAtualizado);

      set(() => ({ loadAtualizar: false }));
      toast.success("Recheio atualizado com sucesso!");
      return null;
    } catch (error) {
      set(() => ({ loadAtualizar: false }));
      toast.error(error.response.data.msg);
      toast.error(error.message);
    }
  },
  cadastrarRecheio: async (e, recheio) => {
    e.preventDefault();
    set(() => ({ loading: true }));
    try {
      const recheioCadastrado = await Api.post("/api/cadastrarRecheio", recheio);

      set(() => ({ loading: false }));
      toast.success("Recheio cadastrado com sucesso!");
    } catch (error) {
      set(() => ({ loading: false }));
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  },
  deletarRecheio: async (id) => {
    set(() => ({ loadExcluir: true }));
    try {
      const recheioDeletado = await Api.delete(`/api/deletarRecheio/${id}`);

      set(() => ({ loadExcluir: false }));
      toast.success("Recheio deletado com sucesso!");
    } catch (error) {
      set(() => ({ loadExcluir: false }));
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  },
});

export const useRecheioStore = create(recheio);