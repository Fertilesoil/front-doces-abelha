﻿import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { botaoLinkPropType } from '../../../PropTypes/PropTypeValidation';

const BotaoLinkVendas = ({ caminho, quantidade, loading }) => {
  return (
    <Link
      to={caminho}
      className={`${loading ? "px-7 py-[.40rem] bg-pink-500 text-white text-sm font-[400] rounded-md flex items-center transition-all ease-linear duration-[.25s]" : "px-7 py-[.40rem] bg-[#1d4151] text-white text-sm hover:text-[#1d4151] hover:bg-white hover:ring-[#1d4151] ring-1 ring-[#1d4151] transition-all duration-[.25s] ease-linear rounded-md font-[400] flex items-center gap-4 group"}`}
    >

      <ShoppingCart size={25} className='cursor-pointer' />

      <div className='bg-white ring-1 ring-teal-600 text-slate-700 font-bold  w-5 h-5 rounded-full flex justify-center items-center text-sm group-hover:text-[#F7F7F7] group-hover:bg-[#1d4151] transition-all duration-[.25s] ease-linear'>
        {quantidade}
      </div>
    </Link>
  )
}

BotaoLinkVendas.propTypes = botaoLinkPropType;

export default BotaoLinkVendas