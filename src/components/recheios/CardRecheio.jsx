﻿import { Link } from "react-router-dom";
import { cardRecheioPropType } from "../../PropTypes/PropTypeValidation"
import { FilePenLine } from "lucide-react";

const CardRecheio = ({ id, nome, caminho }) => {

  return (
    <div className="flex flex-col justify-center items-center gap-3 ring ring-pink-200 rounded-md bg-pink-50 w-[22rem] min-h-[8rem] font-ManRope hover:scale-105 transition-all">
      <div className="flex items-center justify-center gap-2 w-[100%]">
        <span className="rounded-lg w-2 h-2 bg-pink-400 ring-2 ring-pink-300">

        </span>

        <h3 className="whitespace-nowrap overflow-hidden text-center font-[600] text-slate-500 leading-4">
          {id}
        </h3>
      </div>

      <h2 className="font-bold text-xl text-slate-600">
        {nome}
      </h2>

      <Link
        className="w-[10%] flex justify-center text-[#F7F7F7] ring-1 ring-pink-300 bg-pink-300 rounded-sm py-1 cursor-pointer hover:scale-110 transition-all"
        to={`${caminho}`}
      >
        <FilePenLine size={20} strokeWidth={2.5} />
      </Link>
    </div>
  )
}

CardRecheio.propTypes = cardRecheioPropType;

export default CardRecheio