import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import HomePage from "../pages/HomePage";
import Protected from "../middlewares/Protected";
import DefaultLayout from "../pages/DefaultLayout";
import CardProdutoVenda from "../components/produtosVenda/CardProdutoVenda";
import HomeProdutos from "../pages/HomeProdutos";
import HomeRecheios from "../pages/HomeRecheios";
import FormularioRecheio from "../components/recheios/FormularioRecheio";
import ListarRecheios from "../pages/ListarRecheios";
import EditarRecheio from "../components/recheios/EditarRecheio";
import { RecheioProvider } from "../contexts/RecheioContext/RecheioProvider";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="login" element={<Login />} />
            <Route path="cadastro" element={<Cadastro />} />

            <Route path="/" element={<DefaultLayout />}>

                <Route path="/" index element={<Protected> <HomePage /> </Protected>} />

                <Route path="/produtosVenda" element={<Protected> <HomeProdutos /> </Protected>} >
                    <Route path="cardProdutos" element={<Protected> <CardProdutoVenda /> </Protected>} />
                </Route>

                    <Route path="/recheios" element={<Protected> <HomeRecheios /> </Protected>}>
                        <Route path="cadastro" element={<Protected> <FormularioRecheio /> </Protected>} />
                        <Route path="listar" element={<Protected> <ListarRecheios /> </Protected>} />
                        <Route path="editar/:id" element={<Protected> <EditarRecheio /> </Protected>} />
                    </Route>

            </Route>

            <Route path="*" element={<NotFound />} />
        </Route>
    )
);