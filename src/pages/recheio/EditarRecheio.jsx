/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import FormularioWraper from "../../components/shared/wrapers/FormularioWraper";
import { RecheioContext } from "../../contexts/RecheioContext/RecheioContext";
import { useNavigate, useParams } from "react-router-dom";
import CardEditarRecheio from "../../components/recheios/CardEditarRecheio";


const EditarRecheio = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    setAtivoEditar,
    buscarRecheioPorId } = useContext(RecheioContext);

  useEffect(() => {
    setAtivoEditar(true);

    if (id === ":id") {
      navigate("/recheios");
    } else {
      buscarRecheioPorId(id);
    }

    return () => {
      setAtivoEditar(false);
    }
  }, [id]);

  return (
    <FormularioWraper>
      <CardEditarRecheio id={id} />
    </FormularioWraper>
  )
}

export default EditarRecheio