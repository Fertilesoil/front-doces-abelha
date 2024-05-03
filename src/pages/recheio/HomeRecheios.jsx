import { Outlet, useLocation, useParams } from "react-router-dom"
import BotaoLinkRecheios from "../../components/shared/botoes/BotaoLinkRecheios";
import NavHomeWrapper from "../../components/shared/wrapers/NavHomeWrapper";
import React from "react";

const HomeRecheios = () => {

  const Link = React.memo(BotaoLinkRecheios);
  const NavWrapper = React.memo(NavHomeWrapper);

  const { id } = useParams();

  const location = useLocation();
  const base = `/recheios/`
  const cadastrar = location.pathname === `${base}cadastro`;
  const recheios = location.pathname === `${base}listar`;
  const editar = location.pathname === `${base}editar/${id}`;

  return (
    <NavWrapper secao={`Recheios`} elemento={<Outlet />}>
      <Link
        caminho={`cadastro`}
        titulo={`Cadastrar`}
        loading={cadastrar}
      />

      <Link
        caminho={`listar`}
        titulo={`Recheios`}
        loading={recheios}
      />

      <Link
        caminho={`editar/:id`}
        titulo={`Editar`}
        loading={editar}
      />
    </NavWrapper>
  )
}

export default HomeRecheios