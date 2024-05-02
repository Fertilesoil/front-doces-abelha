﻿/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import FormularioWraper from "../shared/wrapers/FormularioWraper";
import DropDown from "../shared/DropDown";
import BotaoFormulario from "../shared/botoes/produtosVenda/BotaoFormulario";
import CampoFormulario from "../shared/botoes/produtosVenda/CampoFormulario";
import { useNavigate } from "react-router-dom";
import { useProdutoVendaStore } from "../../stores/ProdutoVendaStore";
import { useRecheioStore } from "../../stores/RecheioStore";
import { shallow } from "zustand/shallow";

const FormularioProdutoVenda = () => {

  const setCadastrar = useProdutoVendaStore(state => state.setCadastrar);
  const loading = useProdutoVendaStore(state => state.loading);
  const listarProdutos = useProdutoVendaStore(state => state.listarProdutos);
  const enviarFormulario = useProdutoVendaStore(state => state.enviarFormulario);

  const recheios = useRecheioStore(state => state.recheios);
  const loadingRecheio = useRecheioStore(state => state.loading);
  const listarRecheios = useRecheioStore(state => state.listarRecheios);
  const filtered = recheios.toSorted((a, b) => a.nome.localeCompare(b.nome), shallow);

  const [produto, setProduto] = useState(null);

  const navigate = useNavigate();

  const guardarValores = useCallback((e) => {
    let nome = e.target.name;
    let valor = e.target.value;

    setProduto({
      ...produto,
      [nome]: valor
    })
  }, [produto]);

  useEffect(() => {
    setCadastrar();
    return () => {
      setCadastrar();
    }
  }, []);

  useEffect(() => {
    if (recheios.length === 0) {
      listarRecheios();
    }
  }, [listarRecheios, recheios.length]);

  return (
    <FormularioWraper>
      <form className="border-4 border-teal-200 focus-within:border-teal-400 rounded-md shadow-xl w-[30%] h-[85%] flex flex-col justify-center gap-6 items-center font-ManRope bg-teal-50 transition-all">

        <legend className="text-xl font-bold text-slate-600">
          Informações do produto de venda
        </legend>

        <CampoFormulario
          titulo={`Nome`}
          type={`text`}
          name={`nome`}
          funcao={guardarValores}
        />

        <CampoFormulario
          titulo={`Descricao`}
          type={`text`}
          name={`descricao`}
          funcao={guardarValores}
        />

        <CampoFormulario
          titulo={`Peso`}
          type={`number`}
          name={`peso`}
          funcao={guardarValores}
        />

        <CampoFormulario
          titulo={`Preço`}
          type={`number`}
          name={`preco`}
          funcao={guardarValores}
        />

        <CampoFormulario
          titulo={`Quantidade`}
          type={`number`}
          name={`quantidade`}
          funcao={guardarValores}
        />

        <div className="flex justify-between items-center text-slate-600 font-[600] w-[80%]">
          <h3>Recheio</h3>

          <DropDown
            loading={loadingRecheio}
            recheios={filtered}
            posicao={`bottom-[6.7rem]`}
            funcao={setProduto}
            produto={produto}
          />
        </div>

        <BotaoFormulario
          funcao={async (e) => {
            const enviar = await enviarFormulario(e, produto)
            if (enviar === null) {
              await listarProdutos();
              navigate("/produtosVenda/produtos");
            }
          }}
          produto={produto}
          loader={loading}
        />

      </form >
    </FormularioWraper>
  )
}

export default FormularioProdutoVenda