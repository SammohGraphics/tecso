import GuestRoutes from "./GuestRoutes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";

// !############## MAIN FUNC ###########
const AppRoutes = () => {
  const router = createBrowserRouter([
    /*************************************
     *? @ Guest Routes
     *************************************/
    {
      path: "/",
      element: <GuestRoutes />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
