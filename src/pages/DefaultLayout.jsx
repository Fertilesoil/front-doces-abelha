import { Link, Outlet, useNavigate } from "react-router-dom";
import Navigation, { NavbarItem } from "../components/navigation/Navigation";
import {
  BarChartBig,
  Box,
  ChefHat,
  DoorOpen,
  Home,
  PackageSearch
} from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext/UserContext";
import toast from "react-hot-toast";

const DefaultLayout = () => {

  const { logoutApiCall } = useContext(AuthContext);

  const navigate = useNavigate();

  async function logout() {
    try {
      const deslogado = await logoutApiCall();
      if (deslogado === null) {
        toast.success("Deslogado com sucesso!");
        navigate("/login");
        window.location.reload();
      }
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
    return console.log(`Coisa parecida`);
  }

  return (
    <>
      <Navigation>
        <Link to="/">
          <NavbarItem icone={<Home size={25} />} texto="Home" />
        </Link>

        <Link to="/produtosVenda">
          <NavbarItem icone={<Box size={25} />} texto="Produtos" />
        </Link>

        <NavbarItem icone={<PackageSearch size={25} />} texto="Estoque" />

        <NavbarItem icone={<ChefHat size={25} />} texto="Recheios" />

        <NavbarItem icone={<BarChartBig size={25} />} texto="Vendas" />

        <Link onClick={logout}>
          <NavbarItem icone={<DoorOpen size={25} />} texto="Logout" />
        </Link>
      </Navigation>
      <Outlet />
    </>
  )
}

export default DefaultLayout