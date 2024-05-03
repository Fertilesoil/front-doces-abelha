import TemplateHomes from "../shared/TemplateHomes"


const HomeTemplateProdutosEstoque = () => {
  return (
    <TemplateHomes
      titulo={`Produtos Estoque`}
      produto={`produto de estoque`}
      plural={`produtos de estoque`}
      corTexto={`text-orange-600`}
      gradient={`bg-gradient-to-bl from-amber-500 via-orange-600 to-orange-700`}
    />
  )
}

export default HomeTemplateProdutosEstoque