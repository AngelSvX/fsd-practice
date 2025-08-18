import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersPage from "../../pages/users/UsersPage";
import UserPage from "../../pages/users/UserPage";
import { Layout } from "../../shared/layouts/Layout";
import Countries from "../../features/countries/ui/Countries";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/users',
        element: <UsersPage />,
      },
      {
        path: '/users/:id',
        element: <UserPage />
      },
      {
        path: '/weather',
        element: "Hola mundo"
      },
      {
        path: '/countries',
        element: <Countries/>
      }
    ]
  },
  {
    path: '*',
    element: "ERROR 404 NOT FOUND UWU"
  }
])

export const AppRouter = () => <RouterProvider router={router} />;