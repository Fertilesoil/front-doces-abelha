import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { ProdutoVendaContext } from "../contexts/ProdutosContexts/ProdutosVenda/ProdutoVendaContext";
import BotaoLinkProdutos from "../components/botoes/BotaoLinkProdutos";

const HomeProdutos = () => {

  const { ativoCard, ativoCadastrar, ativoEditar } = useContext(ProdutoVendaContext);

  return (
    <>
      <header className="ml-16 flex items-center border-b h-14 shadow-sm px-10">

        <nav className="flex-1 flex justify-evenly">
          <BotaoLinkProdutos
            caminho={`cadastrar`}
            loading={ativoCadastrar}
            titulo={`Cadastrar`}
          />

          <BotaoLinkProdutos
            caminho={`produtos`}
            loading={ativoCard}
            titulo={`Produtos`}
          />

          <BotaoLinkProdutos
            caminho={`editar/:id`}
            loading={ativoEditar}
            titulo={`Editar`}
          />
        </nav>

        <h2 className="px-2 text-2xl text-[#1d4151] font-SpecialElite font-[700]">Produtos</h2>
      </header>

      <main className="ml-16 flex-1">
        <Outlet />
      </main>
    </>
  )
}

export default HomeProdutos