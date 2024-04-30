/* eslint-disable no-unused-vars */
import { useCallback, useContext, useEffect, useState } from "react";
import { ProdutoVendaContext } from "../../contexts/ProdutosContexts/ProdutosVenda/ProdutoVendaContext";
import FormularioWraper from "../shared/wrapers/FormularioWraper";
import DropDown from "../shared/DropDown";
import BotaoFormulario from "../shared/botoes/produtosVenda/BotaoFormulario";
import CampoFormulario from "../shared/botoes/produtosVenda/CampoFormulario";
import { Api } from "../../services/Api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const FormularioProdutoVenda = () => {

  const [produto, setProduto] = useState(null);

  const [carregando, setCarregando] = useState(true);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    setAtivoCadastrar,
    recheios,
    listarRecheios,
    atualizarProdutos} = useContext(ProdutoVendaContext);

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
  };

  const guardarValores = useCallback((e) => {
    let nome = e.target.name;
    let valor = e.target.value;

    setProduto({
      ...produto,
      [nome]: valor
    })
  }, [produto]);

  useEffect(() => {
    setAtivoCadastrar(true);

    if (recheios.length === 0) {
      listarRecheios();
    }

    if (recheios.length > 0)
      setCarregando(false);

    return () => {
      setAtivoCadastrar(false)
    }
  }, [listarRecheios, recheios, setAtivoCadastrar]);

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
            loading={carregando}
            recheios={recheios}
            posicao={`bottom-[6.7rem]`}
            funcao={setProduto}
            produto={produto}
          />
        </div>

        <BotaoFormulario
          funcao={enviarFormulario}
          produto={produto}
          loader={loading}
        />

      </form >
    </FormularioWraper>
  )
}

export default FormularioProdutoVenda