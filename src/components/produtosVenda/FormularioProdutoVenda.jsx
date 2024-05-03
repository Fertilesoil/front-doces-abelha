/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useCallback, useState } from "react";
import DropDown from "../shared/DropDown";
import BotaoFormulario from "../shared/botoes/produtosVenda/BotaoFormulario";
import CampoFormulario from "../shared/botoes/produtosVenda/CampoFormulario";
import { useNavigate } from "react-router-dom";
import { useProdutoVendaStore } from "../../stores/ProdutoVendaStore";
import { useRecheioStore } from "../../stores/RecheioStore";
import { formularioProdutoVendaPropType } from "../../PropTypes/PropTypeValidation";

const FormularioProdutoVenda = ({ filtered }) => {

  const loading = useProdutoVendaStore(state => state.loading);
  const listarProdutos = useProdutoVendaStore(state => state.listarProdutos);
  const enviarFormulario = useProdutoVendaStore(state => state.enviarFormulario);

  const loadingRecheio = useRecheioStore(state => state.loading);

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

  return (
    <form className="border-4 border-teal-200 focus-within:border-teal-400 rounded-md shadow-xl w-[30%] h-[85%] flex flex-col justify-center gap-6 items-center font-ManRope bg-teal-50 transition-all">

      <legend className="text-xl font-bold text-slate-600">
        Informações do produto de venda
      </legend>

      <CampoFormulario
        titulo={`Nome`}
        type={`text`}
        name={`nome`}
        cor={`bg-teal-300`}
        corFocus={`bg-teal-400`}
        funcao={guardarValores}
      />

      <CampoFormulario
        titulo={`Descricao`}
        type={`text`}
        name={`descricao`}
        cor={`bg-teal-300`}
        corFocus={`bg-teal-400`}
        funcao={guardarValores}
      />

      <CampoFormulario
        titulo={`Peso`}
        type={`number`}
        name={`peso`}
        cor={`bg-teal-300`}
        corFocus={`bg-teal-400`}
        funcao={guardarValores}
      />

      <CampoFormulario
        titulo={`Preço`}
        type={`number`}
        name={`preco`}
        cor={`bg-teal-300`}
        corFocus={`bg-teal-400`}
        funcao={guardarValores}
      />

      <CampoFormulario
        titulo={`Quantidade`}
        type={`number`}
        name={`quantidade`}
        cor={`bg-teal-300`}
        corFocus={`bg-teal-400`}
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
  )
}

FormularioProdutoVenda.propTypes = formularioProdutoVendaPropType;

export default FormularioProdutoVenda