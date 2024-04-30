import React, { useContext } from "react"
import { Outlet } from "react-router-dom"
import { ProdutoVendaContext } from "../../contexts/ProdutosContexts/ProdutosVenda/ProdutoVendaContext";
import BotaoLinkProdutos from "../../components/shared/botoes/BotaoLinkProdutos";
import NavHomeWrapper from "../../components/shared/wrapers/NavHomeWrapper";

const Wrapper = React.memo(NavHomeWrapper);
const Links = React.memo(BotaoLinkProdutos);

const HomeProdutos = () => {

  const { ativoCard, ativoCadastrar, ativoEditar } = useContext(ProdutoVendaContext);

  return (
    <Wrapper secao={`Produtos`} elemento={<Outlet />}>
      <Links
        caminho={`cadastrar`}
        loading={ativoCadastrar}
        titulo={`Cadastrar`}
      />

      <Links
        caminho={`produtos`}
        loading={ativoCard}
        titulo={`Produtos`}
      />

      <Links
        caminho={`editar/:id`}
        loading={ativoEditar}
        titulo={`Editar`}
      />
    </Wrapper>
  )
}

const HomeProducts = React.memo(HomeProdutos);

export default HomeProducts