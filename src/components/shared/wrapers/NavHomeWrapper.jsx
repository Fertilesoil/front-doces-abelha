import { navHomeWrapperPropType } from "../../../PropTypes/PropTypeValidation"

const NavHomeWrapper = ({ children, secao, elemento }) => {
  return (
    <>
      <header className="ml-16 flex items-center border-b h-[3.4rem] shadow-sm px-8">
        <nav className="flex-1 flex justify-evenly">
          {children}
        </nav>

        <h2 className="px-2 text-2xl text-[#1d4151] font-SpecialElite font-[700]">{secao}</h2>
      </header>

      <main className="ml-16 flex-1 h-screen">
        {elemento}
      </main>
    </>
  )
}

NavHomeWrapper.propTypes = navHomeWrapperPropType;

export default NavHomeWrapper