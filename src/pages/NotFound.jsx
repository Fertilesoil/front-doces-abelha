import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="h-[100vh] bg-[#CE5A67] flex flex-col justify-center items-center">
      <h1 className="text-[3rem] text-[#FCF5ED]">Página não encontrada</h1>

      <Link to="/" className="bg-[#1F1717] text-[#FCF5ED] text-[1.5rem] px-5 py-4 rounded-xl">
        Voltar a página principal
      </Link>
    </main>
  );
}

export default NotFound;