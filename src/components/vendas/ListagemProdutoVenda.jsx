import { useProdutoVendaStore } from "../../stores/ProdutoVendaStore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLayoutEffect } from "react";
import { useCarrinhoStore } from "../../stores/CarrinhoStore";
import toast from "react-hot-toast";

const ListagemProdutoVenda = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    className: "w-[50rem] flex justify-center items-center gap-4"
  };


  const produtos = useProdutoVendaStore(state => state.produtos);
  const carrinho = useCarrinhoStore(state => state.itens);
  const listarProdutos = useProdutoVendaStore(state => state.listarProdutos);

  
  const adicionarAoCarrinho = (produto) => {
    
    const existente = carrinho.includes(produto);

    if (!existente) {
      useCarrinhoStore.setState(() => ({ itens: [...carrinho, produto] }));
    } else {
      toast.error("Produto já adicionado ao carinho.");
    }
  }

  useLayoutEffect(() => {
    if (produtos.length === 0) {
      listarProdutos();
    }
  }, []);

  return (
    <section className="flex flex-row w-full slider-container">
      <Slider {...settings}>
        {produtos.map(produto => (
          <div
            key={produto?.id}
            className="ring-4  ring-teal-200 focus-within:border-teal-400 rounded-md shadow-xl min-h-[13rem] p-4 flex flex-col justify-center gap-5 items-center font-ManRope bg-teal-50 transition-all text-slate-500">

            <div className="flex justify-center items-center w-full mb-3">
              <h2
                className=" font-bold text-xl leading-3 text-center flex-1 shrink-0"
              >
                {produto?.nome}
              </h2>
            </div>

            <h2
              className="text-sm text-balance text-center bg-teal-100 w-full rounded-md font-[500] leading-5 p-1 mb-3">
              {produto?.descricao}
            </h2>

            <div className="flex justify-center items-center gap-5 w-full mb-3">
              <span
                className="border-4 border-teal-100 rounded-md p-2 w-[40%] flex items-center justify-center"
              >
                {produto?.peso >= "1000" ? "1 Kg" : produto?.peso + " gramas"}
              </span>
              <span
                className="border-4 border-teal-100 rounded-md p-2 w-[40%] flex items-center justify-center"
              >
                {produto?.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </span>
            </div>

            <div className="flex justify-between items-center gap-2 mb-3">
              <span
                className="text-sm text-balance text-center bg-teal-100 w-full rounded-md font-[500] leading-5 p-1">
                {produto?.quantidade} unidades
              </span>

              <span
                className="text-sm text-balance text-center bg-teal-100 w-full rounded-md font-[500] leading-5 p-1">
                Recheio: {produto?.recheio?.nome}
              </span>
            </div>

            <button
              onClick={() => adicionarAoCarrinho(produto)}
              className="text-center w-full font-[600] bg-teal-100 rounded-md p-1"
            >
              <span>Adicionar ao carrinho</span>
            </button>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default ListagemProdutoVenda