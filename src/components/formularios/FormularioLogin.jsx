import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { forms, formsButton, formsInput, formsLegend } from "../styles/EstilosDefault"
import { AuthContext } from "../../contexts/UserContext/UserContext"

const FormularioLogin = () => {

  const [value, setValue] = useState({
    email: "",
    senha: ""
  });

  const { loginApiCall } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginApiCall(value);

      if (response) {
        navigate("/");
      }
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  }

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

        <button
          className={`${formsButton}`}
          onClick={handleLogin}
        >
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