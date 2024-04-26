import { FilePenLine } from "lucide-react";
import { produtoVendaPropType } from "../../PropTypes/PropTypeValidation";
import { formatarPreco } from "../../utils/Utilidades";
import { Link } from "react-router-dom";

const CardProdutoVenda = ({ produtos }) => {

  return (
    <>
      {
        produtos.map(produto => (
          <div
            key={produto?.id}
            className="ring-4 ring-teal-200 focus-within:border-teal-400 rounded-md shadow-xl w-[90%] h-full p-4 flex flex-col justify-center gap-5 items-center font-ManRope bg-teal-50 transition-all text-slate-500">

            <div className="flex justify-center items-center w-full">
              <h2
                className=" font-bold text-xl leading-3 text-center flex-1 shrink-0"
              >
                {produto?.nome}
              </h2>

              <Link
                to={`/produtosVenda/editar/${produto.id}`}
                className="text-[#F7F7F7] ring-1 ring-teal-600 bg-teal-600 rounded-sm py-1 px-2 hover:scale-110 transition-all">
                <FilePenLine size={20} strokeWidth={2.5} />
              </Link>
            </div>

            <h2
              className="text-sm text-balance text-center bg-teal-100 w-full rounded-md font-[500] leading-5 p-1">
              {produto?.descricao}
            </h2>

            <div className="flex justify-center items-center gap-5 w-full">
              <span
                className="border-4 border-teal-100 rounded-md p-2 w-[40%] flex items-center justify-center"
              >
                {produto?.peso >= "1000" ? "1 Kg" : produto?.peso + " gramas"}
              </span>
              <span
                className="border-4 border-teal-100 rounded-md p-2 w-[40%] flex items-center justify-center"
              >
                R$ {formatarPreco(produto?.preco)}
              </span>
            </div>

            <span
              className="text-sm text-balance text-center bg-teal-100 w-full rounded-md font-[500] leading-5 p-1">
              {produto?.quantidade} unidades
            </span>

            <span
              className="text-sm text-balance text-center bg-teal-100 w-full rounded-md font-[500] leading-5 p-1">
              Recheio: {produto?.recheio?.nome}
            </span>
          </div>
        ))
      }
    </>
  )
}

CardProdutoVenda.propTypes = produtoVendaPropType;

export default CardProdutoVenda