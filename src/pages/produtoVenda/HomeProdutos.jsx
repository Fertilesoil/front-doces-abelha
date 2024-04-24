import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { ProdutoVendaContext } from "../../contexts/ProdutosContexts/ProdutosVenda/ProdutoVendaContext";
import BotaoLinkProdutos from "../../components/shared/botoes/BotaoLinkProdutos";
import NavHomeWrapper from "../../components/shared/wrapers/NavHomeWrapper";

const HomeProdutos = () => {

  const { ativoCard, ativoCadastrar, ativoEditar } = useContext(ProdutoVendaContext);

  return (
    <NavHomeWrapper secao={`Produtos`} elemento={<Outlet />}>
      <BotaoLinkProdutos
        caminho={`cadastrar`}
        loading={ativoCadastrar}
        titulo={`Cadastrar`}
      />

      <BotaoLinkProdutos
        caminho={`produtos`}
        loading={ativoCard}
        titulo={`Produtos`}
      />

      <BotaoLinkProdutos
        caminho={`editar/:id`}
        loading={ativoEditar}
        titulo={`Editar`}
      />
    </NavHomeWrapper>
  )
}

export default HomeProdutos