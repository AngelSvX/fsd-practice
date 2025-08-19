import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersPage from "../../pages/users/UsersPage";
import UserPage from "../../pages/users/UserPage";
import { Layout } from "../../shared/layouts/Layout";
import CountriesPage from "../../pages/countries/CountriesPage";
import CountriePage from "../../pages/countries/CountriePage";

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
        element: <CountriesPage/>
      },
      {
        path: '/countrie/:id',
        element: <CountriePage/>
      }
    ]
  },
  {
    path: '*',
    element: "ERROR 404 NOT FOUND"
  }
])

export const AppRouter = () => <RouterProvider router={router} />;