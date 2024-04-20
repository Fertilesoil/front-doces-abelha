import { Outlet } from "react-router-dom";
import { childrenPropType } from "../../../PropTypes/PropTypeValidation"
import { ProdutoVendaContext } from "./ProdutoVendaContext";
import { useState } from "react";


export const ProdutoVendaProvider = ({ children }) => {

  const [ativoCard, setAtivoCard] = useState(false);
  const [ativoCadastrar, setAtivoCadastrar] = useState(false);

  const [loading, setLoading] = useState(false);

  const [recheios, setRecheios] = useState([]);
  const [produtos, setProdutos] = useState([]);

  const shared = {
    ativoCard,
    setAtivoCard,
    ativoCadastrar,
    setAtivoCadastrar,
    recheios,
    setRecheios,
    loading,
    setLoading,
    produtos,
    setProdutos
  }

  return (
    <ProdutoVendaContext.Provider value={shared}>
      <>
        {children}
        <Outlet />
      </>
    </ProdutoVendaContext.Provider>
  )
}

ProdutoVendaProvider.propTypes = childrenPropType;