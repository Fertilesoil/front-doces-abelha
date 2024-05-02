import { Outlet } from "react-router-dom"
import BotaoLinkRecheios from "../../components/shared/botoes/BotaoLinkRecheios";
import NavHomeWrapper from "../../components/shared/wrapers/NavHomeWrapper";
import React from "react";

const HomeRecheios = () => {

  const Link = React.memo(BotaoLinkRecheios);
  const NavWrapper = React.memo(NavHomeWrapper);

  return (
    <NavWrapper secao={`Recheios`} elemento={<Outlet />}>
      <Link
        caminho={`cadastro`}
        titulo={`Cadastrar`}
      />

      <Link
        caminho={`listar`}
        titulo={`Recheios`}
      />

      <Link
        caminho={`editar/:id`}
        titulo={`Editar`}
      />
    </NavWrapper>
  )
}

export default HomeRecheios