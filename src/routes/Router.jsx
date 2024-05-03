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
import HomeRecheios from "../pages/recheio/HomeRecheios";
import ListarRecheios from "../pages/recheio/ListarRecheios";
import EditarRecheio from "../pages/recheio/EditarRecheio";
import ListarProdutosVenda from "../pages/produtoVenda/ListarProdutosVenda";
import CadastroRecheio from "../pages/recheio/CadastroRecheio";
import HomeTemplateRecheios from "../components/recheios/HomeTemplateRecheios";
import HomeTemplateProdutosVenda from "../components/produtosVenda/HomeTemplateProdutosVenda";
import HomeProdutosVenda from "../pages/produtoVenda/HomeProdutosVenda";
import CadastroProdutoVenda from "../pages/produtoVenda/CadastroProdutoVenda";
import EditarProdutoVenda from "../pages/produtoVenda/EditarProdutoVenda";
import HomeProdutoEstoque from "../pages/produtoEstoque/HomeProdutoEstoque";
import HomeTemplateProdutosEstoque from "../components/produtosEstoque/HomeTemplateProdutosEstoque";
import CadastroProdutoEstoque from "../pages/produtoEstoque/CadastroProdutoEstoque";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="login" element={<Login />} />
            <Route path="cadastro" element={<Cadastro />} />

            <Route path="/" element={<DefaultLayout />}>

                <Route path="/" index element={<Protected> <HomePage /> </Protected>} />

                <Route path="/produtosVenda" element={<Protected> <HomeProdutosVenda /> </Protected>} >
                    <Route path="" element={<Protected> <HomeTemplateProdutosVenda /> </Protected>} />
                    <Route path="cadastrar" element={<Protected> <CadastroProdutoVenda /> </Protected>} />
                    <Route path="produtos" element={<Protected> <ListarProdutosVenda /> </Protected>} />
                    <Route path="editar/:id" element={<Protected> <EditarProdutoVenda /> </Protected>} />
                </Route>

                <Route path="/produtosEstoque" element={<Protected> <HomeProdutoEstoque /> </Protected>} >
                    <Route path="" element={<Protected> <HomeTemplateProdutosEstoque /> </Protected>} />
                    <Route path="cadastrar" element={<Protected> <CadastroProdutoEstoque /> </Protected>} />
                    {/* <Route path="produtos" element={<Protected> <ListarProdutosVenda /> </Protected>} />
                    <Route path="editar/:id" element={<Protected> <EditarProdutoVenda /> </Protected>} /> */}
                </Route>

                <Route path="/recheios" element={<Protected> <HomeRecheios /> </Protected>}>
                    <Route path="" element={<Protected> <HomeTemplateRecheios /> </Protected>} />
                    <Route path="cadastro" element={<Protected> <CadastroRecheio /> </Protected>} />
                    <Route path="listar" element={<Protected> <ListarRecheios /> </Protected>} />
                    <Route path="editar/:id" element={<Protected> <EditarRecheio /> </Protected>} />
                </Route>

            </Route>

            <Route path="*" element={<NotFound />} />
        </Route>
    )
);