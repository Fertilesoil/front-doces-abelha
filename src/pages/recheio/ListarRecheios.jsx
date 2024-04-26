/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import CardRecheio from "../../components/recheios/CardRecheio";
import SpiralLoader from "../../components/loaders/SpiralLoader";
import { RecheioContext } from "../../contexts/RecheioContext/RecheioContext";
import BarraDePesquisa from "../../components/shared/BarraDePesquisa";

const ListarRecheios = () => {

  const { recheios, listarRecheios, loading, setAtivoListar } = useContext(RecheioContext);

  useEffect(() => {
    setAtivoListar(true);

    if (recheios.length === 0) {
      listarRecheios();
    }

    return () => {
      setAtivoListar(false);
    }
  }, [recheios.length])

  return (
    <section className="my-4">

      <BarraDePesquisa
        reserva={recheios}
      />

      <div className="grid grid-cols-3 grid-rows-subgrid place-items-center gap-4">
        {loading ?
          <div className="flex items-center justify-center h-[80vh] w-[80vw] absolute right-40 bottom-12 -z-10">
            <SpiralLoader
              cor="#EC4899"
              tamanho={200}
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