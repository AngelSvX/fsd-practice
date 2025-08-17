import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersPage from "../../pages/users/UsersPage";
import UserPage from "../../pages/users/UserPage";

const router = createBrowserRouter([
  {
    path: '/users',
    element: <UsersPage/>,
  },
  {
    path: '/users/:id',
    element: <UserPage/>
  }
])

export const AppRouter = () => <RouterProvider router={router} />;