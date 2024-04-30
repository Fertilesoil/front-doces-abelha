import { useEffect } from "react";
import { formsWraperPropType } from "../../PropTypes/PropTypeValidation"
import { injetarImagem } from "../../utils/Utilidades";


const FormsWraper = ({ children, flex, borderLeft, borderRight }) => {


  useEffect(() => {
    injetarImagem(".imagem", "assets/images/abelhas-login.jpg");
  });

  return (
    <main className={`h-[100vh] flex justify-center items-center bg-gradient-to-l from-[#1D4151] to-[#8BBBC9]`}>

      <section className={`h-[80vh] w-[70vw] flex ${flex} justify-center items-center max-sm:h-[80dvh] max-sm:w-[90dvw] max-lg:h-[80dvh] max-lg:w-[90dvw]`}>

        <aside className={`imagem w-[50%] h-full ${borderLeft} bg-center bg-cover bg-no-repeat max-sm:hidden max-lg:hidden`}>
        </aside>

        <aside className={`w-[50%] h-full flex justify-center items-center bg-[#FCF5ED] ${borderRight} max-sm:w-[100%] max-lg:w-[100%]`}>
          {children}
        </aside>

      </section>

    </main>
  )
}

FormsWraper.propTypes = formsWraperPropType;

export default FormsWraper