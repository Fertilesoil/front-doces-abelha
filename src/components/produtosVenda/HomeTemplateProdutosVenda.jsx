import TemplateHomes from "../shared/TemplateHomes"


const HomeTemplateProdutosVenda = () => {
  return (
    <TemplateHomes 
      titulo={`Produtos Venda`}
      produto={`produto de vendas`}
      plural={`produtos de vendas`}
      corTexto={`text-teal-600`}
      gradient={`bg-gradient-to-bl from-emerald-500 via-teal-600 to-teal-700`}
    />
  )
}

export default HomeTemplateProdutosVenda