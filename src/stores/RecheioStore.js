﻿/* eslint-disable no-unused-vars */

import { create } from "zustand";
import { Api } from "../services/Api";
import toast from "react-hot-toast";

const recheio = (set) => ({
  recheioEncontrado: null,
  recheios: [],
  loading: false,
  ativoCadastro: false,
  ativoListagem: false,
  ativoEdicao: false,
  loadAtualizar: false,
  loadExcluir: false,

  setCadastro: () => set(state => ({ ativoCadastro: !state.ativoCadastro })),
  setListagem: () => set(state => ({ ativoListagem: !state.ativoListagem })),
  setEdicao: () => set(state => ({ ativoEdicao: !state.ativoEdicao })),
  loadingRecheio: () => set(state => ({ loadingCardRecheio: !state.loadingCardRecheio })),

  capturarRecheio: (e) => ({ nome: e.target.value }),

  setarLoading: () => set(recheio => { recheio.loading = !recheio.loading }),

  listarRecheios: async () => {
    set(() => ({ chamadaFeita: true }));
    set(() => ({ loading: true }));
    try {
      const { data } = await Api.get("/api/listarRecheios");

      set(() => ({ recheios: [...data] }));
      set(() => ({ loading: false }));
      toast.success("Recheios listados com sucesso");
    } catch (error) {
      set(() => ({ loading: false }));
      toast.error(error.message);
      set(() => ({ chamadaFeita: true }));
    }
  },
  buscarRecheioPorId: async (id) => {
    try {
      set(() => ({ loading: true }));
      const { data } = await Api.get(`/api/acharRecheio/${id}`);

      useRecheioStore.setState(() => ({ recheioEncontrado: data }));
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