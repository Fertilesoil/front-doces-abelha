import { Outlet } from "react-router-dom"
import { RecheioContext } from "../../contexts/RecheioContext/RecheioContext";
import { useContext } from "react";
import BotaoLinkRecheios from "../../components/shared/botoes/BotaoLinkRecheios";
import NavHomeWrapper from "../../components/shared/wrapers/NavHomeWrapper";

const HomeRecheios = () => {

  const { ativoCadastrar, ativoEditar, ativoListar } = useContext(RecheioContext);

  return (
    <NavHomeWrapper secao={`Recheios`} elemento={<Outlet />}>
      <BotaoLinkRecheios
        caminho={`cadastro`}
        loading={ativoCadastrar}
        titulo={`Cadastrar`}
      />

      <BotaoLinkRecheios
        caminho={`listar`}
        loading={ativoListar}
        titulo={`Recheios`}
      />

      <BotaoLinkRecheios
        caminho={`editar/:id`}
        loading={ativoEditar}
        titulo={`Editar`}
      />
    </NavHomeWrapper>
  )
}

export default HomeRecheios