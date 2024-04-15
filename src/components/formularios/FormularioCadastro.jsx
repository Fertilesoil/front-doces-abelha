import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { formsButton, formsCadastro, formsInput, formsLegendCadastro } from "../styles/EstilosDefault"
import { Api } from "../../services/Api"
import toast from "react-hot-toast"

const FormularioCadastro = () => {

  const [value, setValue] = useState({
    primeiro_nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    senha_comparada: ""
  })

  const navigate = useNavigate();

  const cadastrarUsuario = async (e) => {
    e.preventDefault();

    try {
      const cadastro = await Api.post("/api/criarUsuario", value);

      if (cadastro.data.usuarioCriado) {
        toast.success("Parabéns, seu usuário foi cadastrado com sucesso!");
        navigate("/login")
      }
    } catch (error) {
      toast.error(error.response.status + ": " + error.response.data.msg);
    }
  }

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
          onChange={e => setValue({ ...value, senha: e.target.value })}
          autoComplete="false"
          placeholder="Senha"
        />
      </label>

      <label>
        <input
          className={`${formsInput}`}
          type="password"
          onChange={e => setValue({ ...value, senha_comparada: e.target.value })}
          autoComplete="false"
          placeholder="Confirmar senha"
        />
      </label>

      <button
        className={`${formsButton}`}
        onClick={cadastrarUsuario}
      >
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