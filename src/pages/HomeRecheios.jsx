import { NavLink, Outlet } from "react-router-dom"

const HomeRecheios = () => {
  return (
    <>
      <header className="ml-16 flex items-center border-b h-14 shadow-sm px-10">

        <nav className="flex-1 flex justify-evenly">
          <NavLink
            to="cadastro"
            className={({ isActive }) => {
              return isActive ? "px-3 py-2 bg-pink-500 text-white rounded-md font-[500] flex items-center" : "px-3 py-2 bg-[#1d4151] hover:text-[#1d4151] hover:bg-white hover:border-[#1d4151] border-2 transition-all text-white rounded-md font-[500]"
            }}

          >
            <span className="font-[600] tracking-wide">Cadastrar</span>
          </NavLink>

          <NavLink
            to="listar"
            className={({ isActive }) => {
              return isActive ? "px-3 py-2 bg-pink-500 text-white rounded-md font-[500] flex items-center" : "px-3 py-2 bg-[#1d4151] hover:text-[#1d4151] hover:bg-white hover:border-[#1d4151] border-2 transition-all text-white rounded-md font-[500]"
            }}

          >
            <span className="font-[600] tracking-wide">Recheios</span>
          </NavLink>
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