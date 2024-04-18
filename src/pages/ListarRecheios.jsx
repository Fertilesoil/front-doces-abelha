/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import CardRecheio from "../components/recheios/CardRecheio";
import { Api } from "../services/Api";
import toast from "react-hot-toast";
import { AuthContext } from "../contexts/UserContext/UserContext";
import { grid } from "ldrs"
grid.register("l-grid");

const ListarRecheios = () => {

  const [recheios, setRecheios] = useState([]);

  const { loading, setLoading } = useContext(AuthContext);

  
  const listarRecheios = async () => {
    setLoading(true);
    try {
      const recheiosListados = await Api.get("/api/listarRecheios");

      setRecheios(recheiosListados.data);
      setLoading(false);
      toast.success("Recheios listados com sucesso");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  }

  useEffect(() => {
    listarRecheios();
  }, [])

  return (
    <section className="my-4">

      <div className="grid grid-cols-3 grid-rows-subgrid place-items-center gap-4">
        {loading ?
          <div className="flex items-center justify-center h-[80vh] w-[80vw] absolute right-40 bottom-12">
            <l-grid
              color="#D988B9"
              size={270}
              speed={1.1}
            />
          </div>
          :
          recheios.map(recheio => (
            <CardRecheio
              key={recheio.id}
              id={recheio.id}
              nome={recheio.nome}
            />
          ))
        }

      </div>

    </section>
  )
}

export default ListarRecheios