import { useState } from "react"
import { Link } from "react-router-dom"
import { formsButton, formsCadastro, formsInput, formsLegendCadastro } from "../styles/EstilosDefault"

const FormularioCadastro = () => {

  const [value, setValue] = useState({
    prieiro_nome: "",
    sobrenome: "",
    email: "",
    senha1: "",
    senha2: ""
  })

  return (
    <form className={`${formsCadastro}`}>

      <legend className={`${formsLegendCadastro}`}>
        Cadastre-se
      </legend>

      <label>
        <input
          className={`${formsInput}`}
          type="text"
          onChange={e => setValue({ ...value, primeiro_nome: e.target.value })}
          placeholder="Primeiro nome"
        />
      </label>

      <label>
        <input
          className={`${formsInput}`}
          type="text"
          onChange={e => setValue({ ...value, sobrenome: e.target.value })}
          placeholder="Sobrenome"
        />
      </label>

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
          onChange={e => setValue({ ...value, senha1: e.target.value })}
          autoComplete="false"
          placeholder="Senha"
        />
      </label>

      <label>
        <input
          className={`${formsInput}`}
          type="password"
          onChange={e => setValue({ ...value, senha2: e.target.value })}
          autoComplete="false"
          placeholder="Confirmar senha"
        />
      </label>

      <button className={`${formsButton}`}>
        Cadastrar
      </button>

      <span>
        Já possui uma conta?
        <Link to="/login" className="text-[#CE5A67] ml-2 font-[500]">
          Faça seu login
        </Link>
      </span>

    </form>
  )
}

export default FormularioCadastro