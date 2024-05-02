/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import FormularioWraper from "../../components/shared/wrapers/FormularioWraper";
import { useNavigate, useParams } from "react-router-dom";
import CardEditarRecheio from "../../components/recheios/CardEditarRecheio";
import { useRecheioStore } from "../../stores/RecheioStore";


const EditarRecheio = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const buscarRecheio = useRecheioStore(recheio => recheio.buscarRecheioPorId);

  useEffect(() => {
    if (id === ":id") {
      navigate("/recheios");
    } else {
      buscarRecheio(id);
    }
  }, [id]);

  return (
    <FormularioWraper>
      <CardEditarRecheio id={id} />
    </FormularioWraper>
  )
}

export default EditarRecheio