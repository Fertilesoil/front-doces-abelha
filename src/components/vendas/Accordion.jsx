import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import WrapperRegistroVenda from "../../components/shared/wrapers/WrapperRegistroVenda"

const Accordion = ({ titulo, children }) => {

  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full py-3 shadow-md border-b rounded-b-md">
      <button
        onClick={() => setToggle((toggle) => !toggle)}
        className={`w-full gap-3 flex items-center`}
      >
        {toggle ? <ChevronUp size={30} className="animate-slide-up" /> : <ChevronDown size={30} className="animate-slide-down" />}
        <span className="font-bold tracking-wide text-lg text-[#1d4151]">{titulo}</span>
      </button>

      <div className={`transition-all duration-300 ease-in-out flex justify-center items-center ${toggle ? `opacity-100 h-[70vh]` : `h-0 opacity-0 `}`}>
        <WrapperRegistroVenda>
          {children}
        </WrapperRegistroVenda>
      </div>

    </div>
  )
}

export default Accordion