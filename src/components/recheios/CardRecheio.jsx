import { cardRecheioPropType } from "../../PropTypes/PropTypeValidation"

const CardRecheio = ({id, nome}) => {

  return (
      <div className="flex flex-col justify-center items-center gap-3 ring ring-pink-200 rounded-md bg-pink-50 w-[22rem] h-24 font-ManRope cursor-pointer hover:scale-105 transition-all">
        <div className="flex items-center justify-center gap-2 w-[100%]">
          <span className="rounded-lg w-2 h-2 bg-pink-400 ring-2 ring-pink-300">

          </span>

          <h3 className="whitespace-nowrap overflow-hidden text-center font-[600] text-slate-500 leading-7">
            {id}
          </h3>
        </div>

        <h2 className="font-bold text-xl text-slate-600">
          {nome}
        </h2>
      </div>
  )
}

CardRecheio.propTypes = cardRecheioPropType;

export default CardRecheio