/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react"
import { AuthContext } from "../contexts/UserContext/UserContext";
import { Api } from "../services/Api";

const HomePage = () => {

  const { usuario, setLoading, loading } = useContext(AuthContext);
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

  // useEffect(() => {
  //   buscarProdutos();
  // }, []);

  return (
    <main className='h-screen after:bg-abelha-home after:top-0 after:left-0 after:w-[100vw] after:fixed after:h-[100vh] after:bg-center after:bg-contain after:bg-no-repeat after:opacity-20 after:z-[-10]  flex justify-center items-center flex-col '>

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
    </main>
  );
}

export default HomePage;