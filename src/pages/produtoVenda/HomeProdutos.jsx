import React from 'react'
import { Outlet } from "react-router-dom"
import BotaoLinkProdutos from "../../components/shared/botoes/BotaoLinkProdutos";
import NavHomeWrapper from "../../components/shared/wrapers/NavHomeWrapper";
import { useProdutoVendaStore } from "../../stores/ProdutoVendaStore";

const Wrapper = React.memo(NavHomeWrapper);
const Links = React.memo(BotaoLinkProdutos);

const HomeProdutos = () => {

  const ativoCard = useProdutoVendaStore(state => state.ativoCard);
  const ativoCadastrar = useProdutoVendaStore(state => state.ativoCadastrar);
  const ativoEditar = useProdutoVendaStore(state => state.ativoEditar);

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