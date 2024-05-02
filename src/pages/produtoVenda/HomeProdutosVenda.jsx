import React from 'react'
import { Outlet } from "react-router-dom"
import BotaoLinkProdutos from "../../components/shared/botoes/BotaoLinkProdutos";
import NavHomeWrapper from "../../components/shared/wrapers/NavHomeWrapper";

const HomeProdutosVenda = () => {

  const Wrapper = React.memo(NavHomeWrapper);
  const Links = React.memo(BotaoLinkProdutos);

  return (
    <Wrapper secao={`Produtos`} elemento={<Outlet />}>
      <Links
        caminho={`cadastrar`}
        titulo={`Cadastrar`}
      />

      <Links
        caminho={`produtos`}
        titulo={`Produtos`}
      />

      <Links
        caminho={`editar/:id`}
        titulo={`Editar`}
      />
    </Wrapper>
  )
}

export default HomeProdutosVenda