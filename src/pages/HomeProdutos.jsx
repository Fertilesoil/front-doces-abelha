import { NavLink, Outlet } from "react-router-dom"

const HomeProdutos = () => {
  return (
    <>
      <div className="bg-slate-300">
        <h3 className="text-center">Estou funcionando</h3>

        <nav>
          <NavLink
            to="cardProdutos"
            className={({ isActive }) => {
              return isActive ? "text-center w-[100vw] ml-20 px-3 py-2 bg-pink-500 text-white relative top-[-.70rem] rounded-md font-[500]" : "text-center w-[100vw] ml-20 px-3 py-2 bg-white relative top-[-.70rem] rounded-md font-[500]"
            }}

          >
            Card Vendas
          </NavLink>
        </nav>
      </div>

      <main className="ml-16 flex-1">
        <Outlet />
      </main>
    </>
  )
}

export default HomeProdutos