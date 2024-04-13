import { useState } from "react"
import { Link } from "react-router-dom"
import { forms, formsButton, formsInput, formsLegend } from "../styles/EstilosDefault"

const FormularioLogin = () => {

  const [value, setValue] = useState({
    email: "",
    senha: ""
  })

  return (
    <form className={`${forms}`}>

      <legend className={`${formsLegend}`}>
        Login
      </legend>

      <div className="flex flex-col justify-center items-center gap-7">
        <label>
          <input
            className={`${formsInput}`}
            type="email"
            onChange={e => setValue({ ...value, email: e.target.value })}
            placeholder="Email"
          />
        </label>


        <label>
          <input
            className={`${formsInput}`}
            type="password"
            onChange={e => setValue({ ...value, senha: e.target.value })}
            autoComplete="false"
            placeholder="Senha"
          />
        </label>

        <button className={`${formsButton}`}>
          Entrar
        </button>
        <span>Não possui uma conta?
          <Link to="/cadastro" className="text-[#CE5A67] ml-2 font-[500]">
            Cadastre-se aqui
          </Link>
        </span>
      </div>
    </form>
  )
}

export default FormularioLogin