import Accordion from "../../components/vendas/Accordion"
import ListagemProdutoVenda from "../../components/vendas/ListagemProdutoVenda"

const RegistroVendas = () => {

  return (
    <section className="flex flex-col h-[80vh]">

      <Accordion titulo={`Registrar Venda`}>
        <ListagemProdutoVenda />
      </Accordion>

      <Accordion titulo={`Visualizar Vendas`}>
      </Accordion>

    </section>
  )
}

export default RegistroVendas