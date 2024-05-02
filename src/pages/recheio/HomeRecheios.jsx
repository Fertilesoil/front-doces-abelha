import { Outlet } from "react-router-dom"
import BotaoLinkRecheios from "../../components/shared/botoes/BotaoLinkRecheios";
import NavHomeWrapper from "../../components/shared/wrapers/NavHomeWrapper";
import { useRecheioStore } from "../../stores/RecheioStore";
import React from "react";

const HomeRecheios = () => {

  const ativoCadastro = useRecheioStore(recheio => recheio.ativoCadastro);
  const ativoListagem = useRecheioStore(recheio => recheio.ativoListagem);
  const ativoEdicao = useRecheioStore(recheio => recheio.ativoEdicao);

  const Link = React.memo(BotaoLinkRecheios);
  const NavWrapper = React.memo(NavHomeWrapper);

  return (
    <NavWrapper secao={`Recheios`} elemento={<Outlet />}>
      <Link
        caminho={`cadastro`}
        loading={ativoCadastro}
        titulo={`Cadastrar`}
      />

      <Link
        caminho={`listar`}
        loading={ativoListagem}
        titulo={`Recheios`}
      />

      <Link
        caminho={`editar/:id`}
        loading={ativoEdicao}
        titulo={`Editar`}
      />
    </NavWrapper>
  )
}

export default HomeRecheios