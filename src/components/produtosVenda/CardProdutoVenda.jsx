import { produtoVendaPropType } from "../../PropTypes/PropTypeValidation";
import { formatarPreco } from "../../utils/Utilidades";

const CardProdutoVenda = ({ produtos }) => {

  return (
    // <section className="flex justify-center items-center h-[80vh] font-ManRope">
    // <section className="grid grid-cols-3 grid-rows-subgrid place-items-center gap-4">
    <>
      {
        produtos.map(produto => (
          <div
            key={produto.id}
            className="ring-4 ring-teal-200 focus-within:border-teal-400 rounded-md shadow-xl w-[90%] h-full p-4 flex flex-col justify-center gap-5 items-center font-ManRope bg-teal-50 transition-all text-slate-600 hover:scale-105">

            <div className="flex justify-center items-center w-full">
              {/* <span className="rounded-lg w-1 h-10 bg-teal-200 ring-2 ring-teal-300 relative right-[7rem]">
                </span> */}

              {/* <span className="relative -z-0 bg-teal-300 min-w-40 min-h-10 p-2 "></span> */}
              <h2
                className=" font-bold text-xl leading-3 text-center"
              // key={produto.id}
              >
                {produto.nome}
              </h2>
            </div>

            <h2
              // key={produto.id}
              className="text-sm text-balance text-center bg-teal-100 w-full rounded-md font-[500] leading-5 p-1">
              {produto.descricao}
            </h2>

            <div className="flex justify-center items-center gap-5 w-full">
              <span
                // key={produto.id}
                className="border-4 border-teal-100 rounded-md p-2 w-[40%] flex items-center justify-center"
              >
                {produto.peso >= "1000" ? "1 Kg" : produto.peso + " gramas"}
              </span>
              <span
                // key={produto.id}
                className="border-4 border-teal-100 rounded-md p-2 w-[40%] flex items-center justify-center"
              >
                R$ {formatarPreco(produto.preco)}
              </span>
            </div>

            <span
              // key={produto.id}
              className="text-sm text-balance text-center bg-teal-100 w-full rounded-md font-[500] leading-5 p-1">
              {produto.quantidade} unidades
            </span>

            <span
              // key={produto.id}
              className="text-sm text-balance text-center bg-teal-100 w-full rounded-md font-[500] leading-5 p-1">
              Recheio: {produto.recheio.nome}
            </span>
          </div>
        ))
      }
    </>
  )
}

CardProdutoVenda.propTypes = produtoVendaPropType;

export default CardProdutoVenda