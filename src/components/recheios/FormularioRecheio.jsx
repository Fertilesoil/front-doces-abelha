/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Api } from "../../services/Api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext/UserContext";
import { TailSpinLoader } from "../loaders/TailSpinLoader";
import { RecheioContext } from "../../contexts/RecheioContext/RecheioContext";

const FormularioRecheio = () => {

  const [recheio, setRecheio] = useState({
    nome: ""
  });

  const { loading, setLoading } = useContext(AuthContext);

  const { setAtivoCadastrar, atualizarRecheios } = useContext(RecheioContext);

  const navigate = useNavigate();

  async function cadastrarRecheio(e) {
    e.preventDefault();

    try {
      const recheioCadastrado = await Api.post("/api/cadastrarRecheio", recheio);

      await atualizarRecheios()

      setLoading(false);
      toast.success("Recheio cadastrado com sucesso!");
      navigate("/recheios");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  }

  useEffect(() => {
    setAtivoCadastrar(true);
    return () => {
      setAtivoCadastrar(false);
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-[80vh]">

      <form className="border-4 border-pink-200 focus-within:border-pink-400 rounded-md shadow-xl w-[40%] h-[30%] flex flex-col justify-center gap-5 items-center font-ManRope bg-pink-50 transition-all">

        <legend
          className="text-lg font-bold text-slate-600"
        >
          Qual o nome do recheio que você gostaria de cadastrar?
        </legend>
        <input
          type="text"
          className="border-2 p-[.5rem] w-[80%] focus:ring focus:ring-pink-300 text-slate-700 font-[500] rounded-sm"
          placeholder="Recheio..."
          onChange={e => setRecheio({ ...recheio, nome: e.target.value })}
        />

        <button
          className={`px-5 py-1.5 bg-pink-500 text-white rounded-md font-[500] flex items-center hover:scale-105 transition-all ${loading && "px-7 py-2"}`}
          onClick={(e) => {
            setLoading(true);
            cadastrarRecheio(e)
          }}
        >
          {
            loading ?
              <TailSpinLoader
                cor="#f7f7f7"
                tamanho={21}
                velocidade={.9}
              />
              : "Enviar"
          }
        </button>
      </form>

    </div>
  )
}

export default FormularioRecheio