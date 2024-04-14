/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/UserContext/UserContext";
import { Api } from "../services/Api";
import { refreshToken } from "../services/UsuarioService";

const HomePage = () => {

  const { usuario, setUsuario, setLoading, loading } = useContext(AuthContext);
  const [produtos, setProdutos] = useState([]);

  const buscarProdutos = async () => {
    try {
      const produtos = await Api.get("/api/listarProdutos")

      setLoading(false);
      setProdutos(produtos.data);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  };

  useEffect(() => {
    refreshToken(setUsuario);
    buscarProdutos();
  }, []);

  return (
    <>
      < div >
        Bem vinde {usuario.perfil.primeiro_nome} {usuario.perfil.sobrenome} !
      </div >

      {loading ?
        (<p>Carregando</p>)
        : produtos.map((item, index) => (
          <ul key={index}>
            <li>{item.nome}</li>
            <li>{item.descricao}</li>
            <li>{item.preco}</li>
            <li>{item.quantidade_estoque}</li>

            {usuario && <li>{usuario.perfil.email}</li>}
          </ul>
        ))}
    </>
  );
}

export default HomePage;