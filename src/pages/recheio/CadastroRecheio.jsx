/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import FormularioWraper from "../../components/shared/wrapers/FormularioWraper"
import FormularioRecheio from "../../components/recheios/FormularioRecheio";
import { useRecheioStore } from "../../stores/RecheioStore";

const CadastroRecheio = () => {

  const setEstado = useRecheioStore(state => state.setCadastro);

  useEffect(() => {
    setEstado();
    return () => {
      setEstado();
    }
  }, []);

  return (
    <FormularioWraper>
      <FormularioRecheio />
    </FormularioWraper>
  )
}

export default CadastroRecheio