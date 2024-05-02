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
import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContext/UserContext";
import toast from "react-hot-toast";
import { childrenPropType } from "../PropTypes/PropTypeValidation";

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

  const Rotas = React.memo(NavbarItem);

  return (
    <>
      <Navigation>

        <Rotas to="/" icone={<Home size={25} />} texto="Home" />

        <Rotas to="/produtosVenda" icone={<Box size={25} />} texto="Produtos" />

        <Rotas to="/" icone={<PackageSearch size={25} />} texto="Estoque" />

        <Rotas to="/recheios" icone={<ChefHat size={25} />} texto="Recheios" />

        <Rotas to="/" icone={<BarChartBig size={25} />} texto="Vendas" />

        <Rotas funcao={logout} icone={<DoorOpen size={25} />} texto="Logout" />

      </Navigation>

      <Outlet />
    </>
  )
}

DefaultLayout.propTypes = childrenPropType;

export default DefaultLayout