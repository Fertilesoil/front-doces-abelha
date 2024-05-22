import NavHomeWrapper from '../../components/shared/wrapers/NavHomeWrapper'
import { Outlet } from 'react-router-dom'
import { useCarrinhoStore } from '../../stores/CarrinhoStore'
import BotaoLinkVendas from '../../components/shared/botoes/BotaoLinkVendas'
// import { useLayoutEffect } from 'react'

const HomeVendas = () => {

  const total = useCarrinhoStore(state => state.totalDiario);
  const buscarTotal = useCarrinhoStore(state => state.buscarTotalDiario);

  // useLayoutEffect(() => {
  //   buscarTotal();
  // },[]);

  return (
    <NavHomeWrapper secao={`Vendas`} elemento={<Outlet />}>

      <div className='px-7 py-[.40rem] text-white text-sm font-[600] rounded-md flex items-center transition-all ease-linear duration-[.25s] bg-[#1d4151]  hover:ring-[#1d4151] ring-1 ring-[#1d4151] tracking-wide'>
        <h3>Total do Dia: {total === null ? "R$ 0,00" : total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</h3>
      </div>

      <BotaoLinkVendas
        quantidade={3}
      />

    </NavHomeWrapper>
  )
}

export default HomeVendas