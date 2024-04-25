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
import HomeProdutos from "../pages/produtoVenda/HomeProdutos";
import HomeRecheios from "../pages/recheio/HomeRecheios";
import ListarRecheios from "../pages/recheio/ListarRecheios";
import EditarRecheio from "../pages/recheio/EditarRecheio";
import { RecheioProvider } from "../contexts/RecheioContext/RecheioProvider";
import { ProdutoVendaProvider } from "../contexts/ProdutosContexts/ProdutosVenda/ProdutoVendaProvider";
import FormularioProdutoVenda from "../components/produtosVenda/FormularioProdutoVenda";
import ListarProdutosVenda from "../pages/produtoVenda/ListarProdutosVenda";
import CardEditavelProdutoVenda from "../components/produtosVenda/CardEditavelProdutoVenda";
import CadastroRecheio from "../pages/recheio/CadastroRecheio";
import TemplateRecheios from "../components/recheios/TemplateRecheios";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="login" element={<Login />} />
            <Route path="cadastro" element={<Cadastro />} />

            <Route path="/" element={<DefaultLayout />}>

                <Route path="/" index element={<Protected> <HomePage /> </Protected>} />

                <Route path="/produtosVenda" element={<Protected> <ProdutoVendaProvider /> </Protected>} >
                    <Route path="" element={<Protected> <HomeProdutos /> </Protected>} >
                        <Route path="cadastrar" element={<Protected> <FormularioProdutoVenda /> </Protected>} />
                        <Route path="produtos" element={<Protected> <ListarProdutosVenda /> </Protected>} />
                        <Route path="editar/:id" element={<Protected> <CardEditavelProdutoVenda /> </Protected>} />
                    </Route>
                </Route>

                <Route path="/recheios" element={<Protected> <RecheioProvider /> </Protected>} >
                    <Route path="" element={<Protected> <HomeRecheios /> </Protected>}>
                        <Route path="" element={<Protected> <TemplateRecheios /> </Protected>} />
                        <Route path="cadastro" element={<Protected> <CadastroRecheio /> </Protected>} />
                        <Route path="listar" element={<Protected> <ListarRecheios /> </Protected>} />
                        <Route path="editar/:id" element={<Protected> <EditarRecheio /> </Protected>} />
                    </Route>
                </Route>

            </Route>

            <Route path="*" element={<NotFound />} />
        </Route>
    )
);