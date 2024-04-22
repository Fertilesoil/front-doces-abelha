/* eslint-disable no-unused-vars */

import { Outlet, useNavigate } from "react-router-dom";
import { childrenPropType } from "../../../PropTypes/PropTypeValidation"
import { ProdutoVendaContext } from "./ProdutoVendaContext";
import { useState } from "react";
import { Api } from "../../../services/Api";
import toast from "react-hot-toast";


export const ProdutoVendaProvider = ({ children }) => {

  const navigate = useNavigate();

  const [ativoCard, setAtivoCard] = useState(false);
  const [ativoCadastrar, setAtivoCadastrar] = useState(false);
  const [ativoEditar, setAtivoEditar] = useState(false);
  const [ativoBotaoEditar, setAtivoBotaoEditar] = useState(false)
  const [ativoBotaoExcluir, setAtivoBotaoExcluir] = useState(false)
  const [loadProduto, setLoadProduto] = useState(false);

  const [loading, setLoading] = useState(false);

  const [recheios, setRecheios] = useState([]);
  const [produtos, setProdutos] = useState([]);

  const [produto, setProduto] = useState(null);

  const atualizarProdutos = async () => {
    setLoading(true);
    try {
      const produtosListados = await Api.get("/api/listarProdutosVenda");
      produtosListados.data.reverse();
      setLoading(false);
      setProdutos(produtosListados.data);
    } catch (error) {
      setLoading(false);
      toast.error("Erro ao atualizar os produtos")
    }
  }

  const listarProdutos = async () => {
    setLoading(true);
    try {
      const todosProdutos = await Api.get("/api/listarProdutosVenda");

      todosProdutos.data.reverse();
      setProdutos(todosProdutos.data);
      setLoading(false);
      toast.success("Produtos carregados com sucesso");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  }

  const listarRecheios = async () => {
    try {
      const recheiosListados = await Api.get("/api/listarRecheios");

      setRecheios(recheiosListados.data);
      toast.success("Recheios prontos para seleção");
    } catch (error) {
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  }

  const atualizarProduto = async (e, id, produtoAtualizado) => {
    e.preventDefault();
    setAtivoBotaoEditar(true);
    try {

      if (produtoAtualizado.preco)
        produtoAtualizado.preco = Number(produtoAtualizado.preco);

      if (produtoAtualizado.quantidade)
        produtoAtualizado.quantidade = Number(produtoAtualizado.quantidade);

      if (produtoAtualizado.peso)
        produtoAtualizado.peso = Number(produtoAtualizado.peso);

      const atualizado = await Api.put(`/api/atualizarProdutoVenda/${id}`, produtoAtualizado);

      await atualizarProdutos();

      setAtivoBotaoEditar(false);
      toast.success("Produto atualizado com sucesso!");
      navigate("/produtosVenda/produtos");
    } catch (error) {
      setAtivoBotaoEditar(false);
      toast.error(error.response.data.msg);
      toast.error(error.message);
    }
  }

  const deletarProduto = async (e, id) => {
    e.preventDefault();
    setAtivoBotaoExcluir(true);
    try {
      const excluido = await Api.delete(`/api/deletarProdutoVenda/${id}`);

      await atualizarProdutos();
      setAtivoBotaoExcluir(false);
      toast.success("Produto excluído com sucesso!");
      navigate("/produtosVenda/produtos");
    } catch (error) {
      setAtivoBotaoExcluir(false);
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  }

  const enviarFormulario = async (e, produto) => {
    e.preventDefault();
    setLoading(true);
    try {

      produto.peso = Number(produto.peso)
      produto.preco = Number(produto.preco)
      produto.quantidade = Number(produto.quantidade)

      const produtoVenda = await Api.post("/api/cadastrarProdutosVenda", produto);

      await atualizarProdutos();

      setLoading(false);
      toast.success("Produto registrado com sucesso!");
      navigate("/produtosVenda/produtos");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  }

  const shared = {
    ativoCard,
    setAtivoCard,
    ativoCadastrar,
    setAtivoCadastrar,
    recheios,
    setRecheios,
    loading,
    setLoading,
    produtos,
    setProdutos,
    ativoEditar,
    setAtivoEditar,
    produto,
    setProduto,
    ativoBotaoEditar,
    setAtivoBotaoEditar,
    ativoBotaoExcluir,
    setAtivoBotaoExcluir,
    atualizarProdutos,
    listarProdutos,
    loadProduto,
    listarRecheios,
    atualizarProduto,
    deletarProduto,
    setLoadProduto,
    enviarFormulario
  }

  return (
    <ProdutoVendaContext.Provider value={shared}>
      <>
        {children}
        <Outlet />
      </>
    </ProdutoVendaContext.Provider>
  )
}

ProdutoVendaProvider.propTypes = childrenPropType;