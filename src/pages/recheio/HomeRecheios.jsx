import { Outlet } from "react-router-dom"
import BotaoLinkRecheios from "../../components/shared/botoes/BotaoLinkRecheios";
import NavHomeWrapper from "../../components/shared/wrapers/NavHomeWrapper";
import { useRecheioStore } from "../../stores/RecheioStore";

const HomeRecheios = () => {

  const ativoCadastro = useRecheioStore(recheio => recheio.ativoCadastro);
  const ativoListagem = useRecheioStore(recheio => recheio.ativoListagem);
  const ativoEdicao = useRecheioStore(recheio => recheio.ativoEdicao);

  return (
    <NavHomeWrapper secao={`Recheios`} elemento={<Outlet />}>
      <BotaoLinkRecheios
        caminho={`cadastro`}
        loading={ativoCadastro}
        titulo={`Cadastrar`}
      />

      <BotaoLinkRecheios
        caminho={`listar`}
        loading={ativoListagem}
        titulo={`Recheios`}
      />

      <BotaoLinkRecheios
        caminho={`editar/:id`}
        loading={ativoEdicao}
        titulo={`Editar`}
      />
    </NavHomeWrapper>
  )
}

export default HomeRecheios