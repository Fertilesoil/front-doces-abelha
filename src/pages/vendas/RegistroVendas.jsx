import Accordion from "../../components/vendas/Accordion"

const RegistroVendas = () => {

  return (
    <section className="flex flex-col h-[80vh]">

      <Accordion titulo={`Registrar Venda`}>
      </Accordion>

      <Accordion titulo={`Visualizar Vendas`}>
      </Accordion>

    </section>
  )
}

export default RegistroVendas