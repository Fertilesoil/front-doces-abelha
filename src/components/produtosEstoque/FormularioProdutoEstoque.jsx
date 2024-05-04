import { useCallback, useState } from "react";
import CampoFormulario from "../shared/botoes/produtosVenda/CampoFormulario";
import BotaoFormulario from "../shared/botoes/produtosEstoque/BotaoFormulario";
import { useProdutoEstoqueStore } from "../../stores/ProdutoEstoqueStore";
import { useNavigate } from "react-router-dom";


const FormularioProdutoEstoque = () => {

  const navigate = useNavigate();

  const loading = useProdutoEstoqueStore(state => state.loading);
  const enviarFormulario = useProdutoEstoqueStore(state => state.enviarFormulario);
  const listarProdutos = useProdutoEstoqueStore(state => state.listarProdutos);

  const [produto, setProduto] = useState(null);

  const guardarValores = useCallback((e) => {
    let nome = e.target.name;
    let valor = e.target.value;

    setProduto({
      ...produto,
      [nome]: valor
    })
  }, [produto]);

  console.log(produto);

  return (
    <form className="border-4 border-orange-200 focus-within:border-orange-400 rounded-md shadow-xl w-[30%] h-[85%] flex flex-col justify-center gap-6 items-center font-ManRope bg-orange-50 transition-all">

      <legend className="text-xl font-bold text-slate-600">
        Informações do produto de estoque
      </legend>

      <CampoFormulario
        titulo={`Nome`}
        type={`text`}
        name={`nome`}
        cor={`bg-orange-300`}
        corFocus={`bg-orange-400`}
        funcao={guardarValores}
      />

      <CampoFormulario
        titulo={`Descricao`}
        type={`text`}
        name={`descricao`}
        cor={`bg-orange-300`}
        corFocus={`bg-orange-400`}
        funcao={guardarValores}
      />

      <CampoFormulario
        titulo={`Preço`}
        type={`number`}
        name={`preco`}
        cor={`bg-orange-300`}
        corFocus={`bg-orange-400`}
        funcao={guardarValores}
      />

      <CampoFormulario
        titulo={`Quantidade`}
        type={`number`}
        name={`quantidade_estoque`}
        cor={`bg-orange-300`}
        corFocus={`bg-orange-400`}
        funcao={guardarValores}
      />

      <BotaoFormulario
        funcao={async (e) => {
          const enviar = await enviarFormulario(e, produto)
          if (enviar === null) {
            await listarProdutos();
            navigate("/produtosEstoque/produtos");
          }
        }}
        produto={produto}
        loader={loading}
      />

    </form>
  )
}

export default FormularioProdutoEstoque