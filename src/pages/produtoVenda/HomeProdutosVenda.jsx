import React from 'react'
import { Outlet } from "react-router-dom"
import BotaoLinkProdutos from "../../components/shared/botoes/BotaoLinkProdutos";
import NavHomeWrapper from "../../components/shared/wrapers/NavHomeWrapper";
import { useProdutoVendaStore } from "../../stores/ProdutoVendaStore";

const Wrapper = React.memo(NavHomeWrapper);
const Links = React.memo(BotaoLinkProdutos);

const HomeProdutosVenda = () => {

  const ativoCard = useProdutoVendaStore(state => state.ativoCard);
  const ativoCadastrar = useProdutoVendaStore(state => state.ativoCadastrar);
  const ativoEditar = useProdutoVendaStore(state => state.ativoEditar);

  const Link = React.memo(Links);
  const NavWrapper = React.memo(Wrapper);

  return (
    <NavWrapper secao={`Produtos`} elemento={<Outlet />}>
      <Link
        caminho={`cadastrar`}
        loading={ativoCadastrar}
        titulo={`Cadastrar`}
      />

      <Link
        caminho={`produtos`}
        loading={ativoCard}
        titulo={`Produtos`}
      />

      <Link
        caminho={`editar/:id`}
        loading={ativoEditar}
        titulo={`Editar`}
      />
    </NavWrapper>
  )
}

export default HomeProdutosVenda