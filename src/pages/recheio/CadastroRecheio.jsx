/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import FormularioWraper from "../../components/shared/wrapers/FormularioWraper"
import { RecheioContext } from "../../contexts/RecheioContext/RecheioContext";
import FormularioRecheio from "../../components/recheios/FormularioRecheio";

const CadastroRecheio = () => {

  const { setAtivoCadastrar } = useContext(RecheioContext);

  useEffect(() => {
    setAtivoCadastrar(true);
    return () => {
      setAtivoCadastrar(false);
    }
  }, []);

  return (
    <FormularioWraper>
      <FormularioRecheio />
    </FormularioWraper>
  )
}

export default CadastroRecheio