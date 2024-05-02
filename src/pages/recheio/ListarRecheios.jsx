
import { useCallback, useEffect } from "react";
import CardRecheio from "../../components/recheios/CardRecheio";
import SpiralLoader from "../../components/loaders/SpiralLoader";
import { useRecheioStore } from "../../stores/RecheioStore";
import { shallow } from "zustand/shallow";

const ListarRecheios = () => {
  
  const listarRecheios = useRecheioStore(state => state.listarRecheios);
  const loading = useRecheioStore(state => state.loading);
  const recheios = useRecheioStore(state => state.recheios);
  
  const filtered = recheios.toSorted((a, b) => a.nome.localeCompare(b.nome), shallow);

  const listagem = useCallback(() => {
    listarRecheios();
  }, [listarRecheios]);

  useEffect(() => {
    if (recheios.length === 0)
      listagem();
  }, [recheios.length, listagem]);

  return (
    <section className="my-4">

      {/* <BarraDePesquisa
        reserva={recheios}
      /> */}

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
          filtered?.map(recheio => (
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