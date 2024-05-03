import React from 'react'
import { Outlet, useLocation, useParams } from "react-router-dom"
import BotaoLinkProdutos from "../../components/shared/botoes/BotaoLinkProdutos";
import NavHomeWrapper from "../../components/shared/wrapers/NavHomeWrapper";

const HomeProdutosVenda = () => {

  const Wrapper = React.memo(NavHomeWrapper);
  const Links = React.memo(BotaoLinkProdutos);

  const { id } = useParams();
  
  const location = useLocation();
  const base = `/produtosVenda/`
  
  const cadastrar = location.pathname === `${base}cadastrar`;
  const produtos = location.pathname === `${base}produtos`;
  const editar = location.pathname === `${base}editar/${id}`;

  return (
    <Wrapper secao={`Produtos`} elemento={<Outlet />}>
      <Links
        caminho={`cadastrar`}
        titulo={`Cadastrar`}
        loading={cadastrar}
      />

      <Links
        caminho={`produtos`}
        titulo={`Produtos`}
        loading={produtos}
      />

      <Links
        caminho={`editar/:id`}
        titulo={`Editar`}
        loading={editar}
      />
    </Wrapper>
  )
}

export default HomeProdutosVenda