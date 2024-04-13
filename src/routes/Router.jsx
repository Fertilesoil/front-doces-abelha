import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import HomePage from "../pages/HomePage";
import Protected from "../middleware/Protected";

export const router = createBrowserRouter([
    { path: '/', element: <Protected> <HomePage /> </Protected> },
    { path: '/login', element: <Login /> },
    { path: '/cadastro', element: <Cadastro /> },
    { path: "*", element: <NotFound /> }
]);