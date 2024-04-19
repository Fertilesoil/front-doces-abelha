import { useState } from "react";
import { childrenPropType } from "../../PropTypes/PropTypeValidation"
import { RecheioContext } from "./RecheioContext";
import { Outlet } from "react-router-dom";
import toast from "react-hot-toast";
import { Api } from "../../services/Api";


export const RecheioProvider = ({ children }) => {

  const [recheios, setRecheios] = useState([]);

  const [loading, setLoading] = useState(false);

  const [ativoCadastrar, setAtivoCadastrar] = useState(false);
  const [ativoListar, setAtivoListar] = useState(false);
  const [ativoEditar, setAtivoEditar] = useState(false);

  const atualizarRecheios = async () => {
    setLoading(true);
    try {
      const recheiosListados = await Api.get("/api/listarRecheios");
      
      setLoading(false);
      setRecheios(recheiosListados.data);
    } catch (error) {
      return error;
    }
  }

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

  let shared = {
    recheios,
    setRecheios,
    listarRecheios,
    loading,
    ativoCadastrar,
    setAtivoCadastrar,
    ativoListar,
    setAtivoListar,
    ativoEditar,
    setAtivoEditar,
    atualizarRecheios
  }

  return (
    <RecheioContext.Provider value={shared}>
      <>
        {children}
        <Outlet />
      </>
    </RecheioContext.Provider>
  )
}

RecheioProvider.propTypes = childrenPropType;