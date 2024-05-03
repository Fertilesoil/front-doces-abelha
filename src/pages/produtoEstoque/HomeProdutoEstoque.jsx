import React from "react";
import NavHomeWrapper from "../../components/shared/wrapers/NavHomeWrapper"
import BotaoLinkEstoque from "../../components/shared/botoes/BotaoLinkEstoque";
import { Outlet, useLocation, useParams } from "react-router-dom";

const HomeProdutoEstoque = () => {

  const Wrapper = React.memo(NavHomeWrapper);
  const Links = React.memo(BotaoLinkEstoque);

  const { id } = useParams();
  
  const location = useLocation();
  const base = `/produtosEstoque/`
  
  const cadastrar = location.pathname === `${base}cadastrar`;
  const produtos = location.pathname === `${base}produtos`;
  const editar = location.pathname === `${base}editar/${id}`;

  return (
    <Wrapper secao={`Estoque`} elemento={<Outlet />}>
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

export default HomeProdutoEstoque