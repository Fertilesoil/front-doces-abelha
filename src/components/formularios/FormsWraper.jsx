﻿import { useEffect } from "react";
import { formsWraperPropType } from "../../PropTypes/PropTypeValidation"
import { injetarImagem } from "../../utils/Utilidades";


const FormsWraper = ({ children, flex, borderLeft, borderRight }) => {


  useEffect(() => {
    injetarImagem(".imagem", "assets/images/abelhas-login.jpg");
  });

  return (
    <main className={`h-[100vh] flex justify-center items-center bg-gradient-to-l from-[#1D4151] to-[#8BBBC9]`}>

      <section className={`h-[80vh] w-[70vw] flex ${flex} justify-center items-center`}>

        <aside className={`imagem w-[50%] h-full ${borderLeft} bg-center bg-cover bg-no-repeat`}>
        </aside>

        <aside className={`w-[50%] h-full flex justify-center items-center bg-[#FCF5ED] ${borderRight}`}>
          {children}
        </aside>

      </section>

    </main>
  )
}

FormsWraper.propTypes = formsWraperPropType;

export default FormsWraper