﻿import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { formsButton, formsCadastro, formsInput, formsLegendCadastro } from "../styles/EstilosDefault"
import { Api } from "../../services/Api"
import toast from "react-hot-toast"
import { injetarImagem } from "../../utils/Utilidades"
import { AuthContext } from "../../contexts/UserContext/UserContext"
import { TailSpinLoader } from "../loaders/TailSpinLoader"

const FormularioCadastro = () => {

  const [value, setValue] = useState({
    primeiro_nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    senha_comparada: ""
  })

  const { loading, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();

  const cadastrarUsuario = async (e) => {
    e.preventDefault();

    try {

      if (value.senha !== value.senha_comparada) {
        throw new Error("As senhas informadas devem ser exatamente iguais.");
      } else if (value.senha === "" || value.senha_comparada === "") {
        setLoading(false);
        throw new Error("As senhas devem estar preenchidas.");
      } else {
        const cadastro = await Api.post("/api/criarUsuario", value);

        if (cadastro.data.usuarioCriado) {
          setLoading(false);
          toast.success("Parabéns, seu usuário foi cadastrado com sucesso!");
          navigate("/login")
        }
      }

    } catch (error) {
      toast.error(error.message);
      toast.error(error.response.data.msg);
    }
  }

  useEffect(() => {
    injetarImagem("legend", "assets/images/abelhas-login.jpg");
  });

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
        className={`${formsButton} ${loading && 'bg-gradient-to-l from-[#8BBBC9] via-[#99d7eb] to-[#bedfe9] px-14 py-2.5'}`}
        onClick={(e) => {
          setLoading(true)
          cadastrarUsuario(e);
        }}
      >
        {loading ?
          <TailSpinLoader
            cor="#ffffff"
            tamanho={21}
            velocidade={.9}
          />
          : "Cadastrar"}
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