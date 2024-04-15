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

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="login" element={<Login />} />
            <Route path="cadastro" element={<Cadastro />} />

            <Route path="/" element={<DefaultLayout />}>
            <Route path="/" index element={<Protected> <HomePage /> </Protected>} />
            <Route path="/produtosVenda" index element={<Protected> <CardProdutoVenda/> </Protected>} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Route>
    )
);