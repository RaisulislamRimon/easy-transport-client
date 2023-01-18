import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutUs from "../../Pages/About/AboutUs/AboutUs";
import Bikes from "../../Pages/Help/Bikes";
import Business from "../../Pages/Help/Business";
import Driving from "../../Pages/Help/Driving";
import Freight from "../../Pages/Help/Freight";
import Help from "../../Pages/Help/Help";
import Marchants from "../../Pages/Help/Marchants";
import Riders from "../../Pages/Help/Riders";
import Home from "../../Pages/Home/Home/Home";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Login from "../../Pages/Shared/Login/Login";
import Register from "../../Pages/Shared/Register/Register";

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
        path: '/help',
        element: <Help></Help>
      },
      {
        path: '/help/riders',
        element: <Riders></Riders>
      },
      {
        path: '/help/driving',
        element: <Driving></Driving>
      },
      {
        path: '/help/marchants',
        element: <Marchants></Marchants>
      },
      {
        path: '/help/bikes',
        element: <Bikes></Bikes>
      },
      {
        path: '/help/business',
        element: <Business></Business>
      },
      {
        path: '/help/freight',
        element: <Freight></Freight>
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
