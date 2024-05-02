import { useCallback, useEffect } from "react";
import FormularioProdutoVenda from "../../components/produtosVenda/FormularioProdutoVenda"
import { useRecheioStore } from "../../stores/RecheioStore";
import { shallow } from "zustand/shallow";
import FormularioWraper from "../../components/shared/wrapers/FormularioWraper";

const CadastroProdutoVenda = () => {

  const listar = useRecheioStore(state => state.listarRecheios);
  const recheios = useRecheioStore(state => state.recheios);

  const filtered = recheios.toSorted((a, b) => a.nome.localeCompare(b.nome), shallow);

  const listarRecheios = useCallback(() => {
    listar();
  }, [listar]);

  useEffect(() => {
    if (recheios.length === 0) {
      listarRecheios();
    }
  }, [recheios.length, listarRecheios]);

  return (
    <FormularioWraper>
      <FormularioProdutoVenda filtered={filtered} />
    </FormularioWraper>
  )
}

export default CadastroProdutoVenda