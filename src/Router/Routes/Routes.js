import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutUs from "../../Pages/About/AboutUs/AboutUs";
import Home from "../../Pages/Home/Home/Home";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Login from "../../Pages/Shared/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
