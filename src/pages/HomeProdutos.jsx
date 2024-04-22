import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { ProdutoVendaContext } from "../contexts/ProdutosContexts/ProdutosVenda/ProdutoVendaContext";

const HomeProdutos = () => {

  const { ativoCard, ativoCadastrar, ativoEditar } = useContext(ProdutoVendaContext);

  return (
    <>
      <header className="ml-16 flex items-center border-b h-14 shadow-sm px-10">

        <nav className="flex-1 flex justify-evenly">
          <Link
            to="cadastrar"
            className={`${ativoCadastrar ? "px-3 py-2 bg-teal-500 text-white rounded-md font-[500] flex items-center transition-all" : "px-3 py-2 bg-[#1d4151] hover:text-[#1d4151] hover:bg-white hover:border-[#1d4151] border-2 transition-all text-white rounded-md font-[500] flex items-center"}`}
          >
            <span className="font-[600] tracking-wide">Cadastrar</span>
          </Link>

          <Link
            to="produtos"
            className={`${ativoCard ? "px-3 py-2 bg-teal-500 text-white rounded-md font-[500] flex items-center transition-all" : "px-3 py-2 bg-[#1d4151] hover:text-[#1d4151] hover:bg-white hover:border-[#1d4151] border-2 transition-all text-white rounded-md font-[500] flex items-center"}`}
          >
            <span className="font-[600] tracking-wide">Produtos</span>
          </Link>

          <Link
            to="editar/:id"
          className={`${ativoEditar ? "px-3 py-2 bg-pink-500 text-white rounded-md font-[500] flex items-center transition-all" : "px-3 py-2 bg-[#1d4151] hover:text-[#1d4151] hover:bg-white hover:border-[#1d4151] border-2 transition-all text-white rounded-md font-[500] flex items-center"}`}
          >
            <span className="font-[600] tracking-wide">Editar</span>
          </Link>
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