import { createBrowserRouter, RouteObject } from "react-router-dom";
import { produtoLoader, produtoLoaderId } from "@/loader/produtoLoader";
import { updateProdutoActionId } from "@/actions/produtoAction";
import { addProdutoAction } from "@/actions/addProdutoAction";
import { registerAction } from "@/actions/registerAction";
import { UpdateProdutos } from "@/pages/UpdateProdutos";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { logoutAction } from "@/actions/logoutAction";
import { loginAction } from "@/actions/loginAction";
import { AddProdutos } from "@/pages/AddProdutos";
import { Produtos } from "@/pages/Produtos";
import { Register } from "@/pages/Register";
import { Login } from "@/pages/Login";

const routes: RouteObject[] = [
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '/register', element: <Register />,action: registerAction },
        { path: '/', element: <Login />,action: loginAction },
        { path: '/logout', element: <Login />,action: logoutAction },
        { path: '/produto', element: <Produtos />, loader: produtoLoader },
        { path: '/adicionar', element: <AddProdutos />,action: addProdutoAction },
        { path: '/produto/:id', element: <UpdateProdutos />, loader:produtoLoaderId,action: updateProdutoActionId},
      ],
    }
  ];
  
  const router = createBrowserRouter(routes);
  
  export default router;