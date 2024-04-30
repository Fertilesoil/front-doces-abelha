import { SquareChevronLeft, SquareChevronRight } from "lucide-react";
import { createContext, memo, useContext, useState } from "react";
import { childrenCollectionPropType, navbarPropType } from "../../PropTypes/PropTypeValidation";
import Perfil from "./Perfil";
import { Link } from "react-router-dom";

export const NavbarContext = createContext({});

const Navigation = ({ children }) => {

  const [expandido, setExpandido] = useState(false);

  return (
    <aside className='h-screen fixed top-0 left-0'>
      <nav className="h-full flex flex-col border-r shadow-sm bg-white">

        <div className="p-2 pb-2 flex justify-between items-center">
          <span className={`flex items-center justify-center flex-1 whitespace-nowrap overflow-hidden font-SpecialElite font-[600] text-[#1D4151] transition-all 
          mr-2 ${expandido ? "px-2 py-2 text-xl w-50" : "px-0 py-0 w-0 mr-0 flex-none"} border-b`}>Doces Abelha</span>

          <button
            className={`p-1.5 rounded-lg bg-gray-50 hover:bg-[#1D4151] text-[#1D4151] hover:text-[#F5F5F5] ${!expandido && " flex justify-center px-2 relative py-2 right-1"}`}
            onClick={() => setExpandido(anterior => !anterior)}>
            {expandido ? <SquareChevronLeft size={25} /> : <SquareChevronRight size={25} />}
          </button>
        </div>

        <NavbarContext.Provider value={{ expandido }}>
          <ul className="flex-1 px-3">
            {children}
          </ul>
        </NavbarContext.Provider>

        <div>
          <Perfil props={expandido} />
        </div>

      </nav>
    </aside>
  )
}
export const NavbarItem = memo(function NavbarItem({ icone, texto, to, funcao }) {
  const { expandido } = useContext(NavbarContext);

  return (
    <Link className={
      `relative flex items-center py-2 ${expandido ? "px-3" : "px-2"} my-1 font-medium rounded-md cursor-pointer transition-colors group hover:bg-[#1D4151] hover:text-[#F7F7F7] text-[#1D4151]`}
      to={to}
      onClick={funcao}
    >

      {icone}

      < span className={`overflow-hidden transition-all ${expandido ? "w-42 ml-3" : "w-0"}`}>
        {texto}
      </span >

      {!expandido && <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-[#1d4151bd] text-[#F7F7F7] text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>{texto}</div>}
    </Link >
  )
})

// export const Nav = memo(function NavbarItem({ icone, texto, to, funcao }) {
  
// });

NavbarItem.propTypes = navbarPropType;
Navigation.propTypes = childrenCollectionPropType;

export default Navigation