import { Outlet } from "react-router-dom"
import { RecheioContext } from "../../contexts/RecheioContext/RecheioContext";
import { useContext } from "react";
import BotaoLinkRecheios from "../../components/shared/botoes/BotaoLinkRecheios";

const HomeRecheios = () => {

  const { ativoCadastrar, ativoEditar, ativoListar } = useContext(RecheioContext);

  return (
    <>
      <header className="ml-16 flex items-center border-b h-14 shadow-sm px-10">

        <nav className="flex-1 flex justify-evenly">
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
        </nav>

        <h2 className="px-2 text-2xl text-[#1d4151] font-SpecialElite font-[700]">Recheios</h2>
      </header>

      <main className="ml-16 flex-1">
        <Outlet />
      </main>
    </>
  )
}

export default HomeRecheios