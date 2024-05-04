import { FilePenLine } from "lucide-react"
import { Link } from "react-router-dom"
import { formularioProdutoVendaPropType } from "../../PropTypes/PropTypeValidation"

const CardProdutoEstoque = ({ produtos }) => {
  return (
    <>
    {
      produtos.map(produto => (
        <div
          key={produto?.id}
          className="ring-4 ring-orange-200 focus-within:border-orange-400 rounded-md shadow-xl w-[70%] h-full p-4 flex flex-col justify-center gap-5 items-center font-ManRope bg-orange-50 transition-all text-slate-500">

          <div className="flex justify-center items-center w-full">
            <h2
              className=" font-bold text-xl leading-3 text-center flex-1 shrink-0"
            >
              {produto?.nome}
            </h2>

            <Link
              to={`/produtosEstoque/editar/${produto?.id}`}
              className="text-[#F7F7F7] ring-1 ring-orange-600 bg-orange-600 rounded-sm py-1 px-2 hover:scale-110 transition-all">
              <FilePenLine size={20} strokeWidth={2.5} />
            </Link>
          </div>

          <h2
            className="text-sm text-balance text-center bg-orange-100 w-full rounded-md font-[500] leading-5 p-1">
            {produto?.descricao}
          </h2>

          <div className="flex justify-center items-center gap-5 w-full">
            <span
              className="border-4 border-orange-100 rounded-md p-2 w-[40%] flex items-center justify-center"
            >
              {produto?.preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
            </span>
          </div>

          <span
            className="text-sm text-balance text-center bg-orange-100 w-full rounded-md font-[500] leading-5 p-1">
            {produto?.quantidade_estoque} unidades
          </span>
        </div>
      ))
    }
  </>
  )
}

CardProdutoEstoque.propTypes = formularioProdutoVendaPropType;

export default CardProdutoEstoque