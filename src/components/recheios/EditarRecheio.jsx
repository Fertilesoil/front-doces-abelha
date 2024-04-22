﻿/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpiralLoader from "../loaders/SpiralLoader";
import { Trash2 } from "lucide-react";
import { TailSpinLoader } from "../loaders/TailSpinLoader";
import { RecheioContext } from "../../contexts/RecheioContext/RecheioContext";

const EditarRecheio = () => {

  const { id } = useParams();

  const [recheioAtualizado, setRecheioAtualizado] = useState({
    nome: ""
  });

  const {
    setAtivoEditar,
    recheio,
    buscarRecheioPorId,
    loadAtualizar,
    loadExcluir,
    navigate,
    loading,
    atualizarRecheio,
    deletarRecheio } = useContext(RecheioContext);

  useEffect(() => {
    if (id === ":id") {
      navigate("/recheios");
    } else {
      buscarRecheioPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setAtivoEditar(true);
    return () => {
      setAtivoEditar(false);
    }
  }, []);

  return (
    <section className="min-h-[80vh] flex justify-center items-center">

      <div className="flex flex-col justify-center items-center gap-3 ring ring-pink-200 rounded-md bg-pink-50 w-[24rem] min-h-32 h-44 font-ManRope  focus-within:ring-pink-400">

        {loading ?
          <SpiralLoader
            cor="#EC4899"
            tamanho={80}
            velocidade={1}
          /> :
          <>
            <div className="flex items-center justify-center gap-2 w-[100%]">
              <span className="rounded-lg w-2 h-2 bg-pink-400 ring-2 ring-pink-300">

              </span>

              <h3 className="whitespace-nowrap overflow-hidden text-center font-[600] text-slate-500 leading-4">
                {recheio.id}
              </h3>
            </div>

            <h2 className="font-bold text-xl text-slate-600">
              {recheio.nome}
            </h2>

            <input
              type="text"
              className="ring-2 ring-pink-200 p-[.2rem] w-[80%] focus:ring focus:ring-pink-300 text-slate-700 font-[500] rounded-sm"
              onChange={(e) => setRecheioAtualizado({ ...recheioAtualizado, nome: e.target.value })}
              placeholder="Novo nome..."
            />

            <div className="w-[80%] flex justify-around items-center text-white rounded-sm ">
              <button
                className={`w-[30%] bg-pink-300 hover:scale-105 transition-all rounded-[.3rem] py-1.5 flex justify-center items-center ${loadExcluir && "py-2"}`}
                onClick={() => {
                  deletarRecheio(id);
                }}
              >
                {
                  loadExcluir ?
                    <TailSpinLoader
                      cor={`#F7F7F7`}
                      tamanho={21}
                      velocidade={.9}
                    />
                    :
                    <Trash2
                      size={25}
                      strokeWidth={2.5}
                    />
                }
              </button>


              <button
                className={`flex items-center justify-center w-[30%] bg-pink-300 font-[600] hover:scale-105 transition-all rounded-[.3rem] py-1.5 ${loadAtualizar && "py-2"}`}
                onClick={() => {
                  atualizarRecheio(id, recheioAtualizado);
                }}
              >
                {
                  loadAtualizar ?
                    <TailSpinLoader
                      cor={`#F7F7F7`}
                      tamanho={21}
                      velocidade={.9}
                    />
                    :
                    "Atualizar"
                }
              </button>
            </div>
          </>
        }
      </div>
    </section>
  )
}

export default EditarRecheio