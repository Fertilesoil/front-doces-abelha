import { Outlet, useNavigate } from "react-router-dom";
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
        navigate("/login", { replace: true });
      }
    } catch (error) {
      console.log(`Erro: ${error}`);
      toast.error(error.message);
    }
  }

  return (
    <>
      <Navigation>

        <NavbarItem to="/" icone={<Home size={25} />} texto="Home" />

        <NavbarItem to="/produtosVenda" icone={<Box size={25} />} texto="Produtos" />

        <NavbarItem to="/" icone={<PackageSearch size={25} />} texto="Estoque" />

        <NavbarItem to="/recheios" icone={<ChefHat size={25} />} texto="Recheios" />

        <NavbarItem to="/" icone={<BarChartBig size={25} />} texto="Vendas" />

        <NavbarItem funcao={logout} icone={<DoorOpen size={25} />} texto="Logout" />

      </Navigation>
      <Outlet />
    </>
  )
}

export default DefaultLayout