/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import CardRecheio from "../components/recheios/CardRecheio";
import GridLoader from "../components/loaders/GridLoader";
import { RecheioContext } from "../contexts/RecheioContext/RecheioContext";

const ListarRecheios = () => {

  const { recheios, listarRecheios, loading, setAtivoListar } = useContext(RecheioContext);

  useEffect(() => {
    setAtivoListar(true);
    return () => {
      setAtivoListar(false);
    }
  }, [])

  useEffect(() => {
    if (recheios.length === 0) {
      listarRecheios();
    }
  }, [recheios])

  return (
    <section className="my-4">

      <div className="grid grid-cols-3 grid-rows-subgrid place-items-center gap-4">
        {loading ?
          <div className="flex items-center justify-center h-[80vh] w-[80vw] absolute right-40 bottom-12">
            <GridLoader
              cor="#EC4899"
              tamanho={270}
              velocidade={1.1}
            />
          </div>
          :
          recheios.map(recheio => (
            <CardRecheio
              key={recheio.id}
              id={recheio.id}
              nome={recheio.nome}
              caminho={`/recheios/editar/${recheio.id}`}
            />
          ))
        }
      </div>

    </section>
  )
}

export default ListarRecheios