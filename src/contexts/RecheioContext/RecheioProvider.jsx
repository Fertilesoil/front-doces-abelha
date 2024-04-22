/* eslint-disable no-unused-vars */

import { useState } from "react";
import { childrenPropType } from "../../PropTypes/PropTypeValidation"
import { RecheioContext } from "./RecheioContext";
import { Outlet, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Api } from "../../services/Api";


export const RecheioProvider = ({ children }) => {

  const navigate = useNavigate();

  const [recheios, setRecheios] = useState([]);
  const [recheio, setRecheio] = useState({});

  const [loading, setLoading] = useState(false);
  const [loadAtualizar, setLoadAtualizar] = useState(false);
  const [loadExcluir, setLoadExcluir] = useState(false);

  const [ativoCadastrar, setAtivoCadastrar] = useState(false);
  const [ativoListar, setAtivoListar] = useState(false);
  const [ativoEditar, setAtivoEditar] = useState(false);

  const atualizarRecheios = async () => {
    setLoading(true);
    try {
      const recheiosListados = await Api.get("/api/listarRecheios");

      setLoading(false);
      setRecheios(recheiosListados.data.reverse());
    } catch (error) {
      return error;
    }
  }

  const listarRecheios = async () => {
    setLoading(true);
    try {
      const recheiosListados = await Api.get("/api/listarRecheios");
      // recheiosListados.data.reverse();
      setRecheios(recheiosListados.data.reverse());
      setLoading(false);
      toast.success("Recheios listados com sucesso");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  }

  const buscarRecheioPorId = async (id) => {
    setLoading(true);
    try {
      const recheioEncontrado = await Api.get(`/api/acharRecheio/${id}`);

      toast.success(`Recheio encontrado: ${recheioEncontrado.data.nome}`);
      setLoading(false);
      setRecheio(recheioEncontrado.data);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
      console.log(error.message);
    }
  }


  const atualizarRecheio = async (id, recheioAtualizado) => {
    setLoadAtualizar(true);
    try {
      const recheioNovo = await Api.put(`/api/atualizarRecheio/${id}`, recheioAtualizado);

      await atualizarRecheios();

      setLoadAtualizar(false);
      toast.success("Recheio atualizado com sucesso!");
      navigate("/recheios/listar");
    } catch (error) {
      setLoadAtualizar(false);
      toast.error(error.response.data.msg);
      toast.error(error.message);
    }
  }

  const deletarRecheio = async (id) => {
    setLoadExcluir(true);
    try {
      const recheioDeletado = await Api.delete(`/api/deletarRecheio/${id}`);

      await atualizarRecheios();

      setLoadExcluir(false);
      toast.success("Recheio deletado com sucesso!");
      navigate("/recheios/listar");
    } catch (error) {
      setLoadExcluir(false);
      toast.error(error.response.data.msg);
      toast.error(error.message);
    }
  }

  const cadastrarRecheio = async (e, recheio) => {
    e.preventDefault();
    setLoading(true);
    try {
      const recheioCadastrado = await Api.post("/api/cadastrarRecheio", recheio);

      await atualizarRecheios()

      setLoading(false);
      toast.success("Recheio cadastrado com sucesso!");
      navigate("/recheios/listar");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  }

  let shared = {
    recheios,
    setRecheios,
    listarRecheios,
    loading,
    ativoCadastrar,
    setAtivoCadastrar,
    ativoListar,
    setAtivoListar,
    ativoEditar,
    setAtivoEditar,
    atualizarRecheios,
    recheio,
    setRecheio,
    buscarRecheioPorId,
    loadAtualizar,
    setLoadAtualizar,
    loadExcluir,
    setLoadExcluir,
    navigate,
    atualizarRecheio,
    deletarRecheio,
    cadastrarRecheio
  }

  return (
    <RecheioContext.Provider value={shared}>
      <>
        {children}
        <Outlet />
      </>
    </RecheioContext.Provider>
  )
}

RecheioProvider.propTypes = childrenPropType;