/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import FormularioWraper from "../../components/shared/wrapers/FormularioWraper";
import { useNavigate, useParams } from "react-router-dom";
import CardEditarRecheio from "../../components/recheios/CardEditarRecheio";
import { useRecheioStore } from "../../stores/RecheioStore";


const EditarRecheio = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const setEstado = useRecheioStore(recheio => recheio.setEdicao);
  const buscarRecheio = useRecheioStore(recheio => recheio.buscarRecheioPorId);

  useEffect(() => {
    if (id === ":id") {
      navigate("/recheios");
    } else {
      buscarRecheio(id);
    }
  }, [id]);

  useEffect(() => {
    setEstado();

    return () => {
      setEstado();
      useRecheioStore.setState(() => ({recheioEncontrado: null}));
    }
  }, []);

  return (
    <FormularioWraper>
      <CardEditarRecheio id={id} />
    </FormularioWraper>
  )
}

export default EditarRecheio