import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {path: '/',  element: <HomePage /> },
  {path: '/login', element: <Login />},
  {path: '/cadastro', element: <Cadastro />},
  {path: "*", element: <NotFound/>}
]);