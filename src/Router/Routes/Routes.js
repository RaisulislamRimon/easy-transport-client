import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutUs from "../../Pages/About/AboutUs/AboutUs";
import Booking from "../../Pages/Dashboard/booking/Booking";
import DashboardHome from "../../Pages/Dashboard/home/DashboardHome";
import DashboardLayout from "../../Pages/Dashboard/Layouts/DashboardLayout";
import Bikes from "../../Pages/Help/Bikes";
import Business from "../../Pages/Help/Business";
import Driving from "../../Pages/Help/Driving";
import Freight from "../../Pages/Help/Freight";
import Help from "../../Pages/Help/Help";
import Marchants from "../../Pages/Help/Marchants";
import Riders from "../../Pages/Help/Riders";
import Home from "../../Pages/Home/Home/Home";
import SafetyDetails from "../../Pages/Home/SafetyDetails/SafetyDetails";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Login from "../../Pages/Shared/Login/Login";
import Register from "../../Pages/Shared/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllCategories from "../../Pages/Home/AllCategories/AllCategories";
import Contact from "../../Pages/Contract/Contract";

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
        path: "/home",
        element: <Home />,
      },
      {
        path: "/help",
        element: <Help></Help>,
      },
      {
        path: "/help/riders",
        element: <Riders></Riders>,
      },
      {
        path: "/help/driving",
        element: <Driving></Driving>,
      },
      {
        path: "/help/marchants",
        element: <Marchants></Marchants>,
      },
      {
        path: "/help/bikes",
        element: <Bikes></Bikes>,
      },
      // {
      //   path: "/ride",
      //   element: <Banner></Banner>,
      // },
      {
        path: "/help/business",
        element: <Business></Business>,
      },
      {
        path: "/help/freight",
        element: <Freight></Freight>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/services/:id",
        element: <AllCategories></AllCategories>,
        loader: async ({ params }) =>
          fetch(`https://easy-transport-server-eosin.vercel.app/services/${params.id}`),
      },
      {
        path: "/safety",
        element: <SafetyDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/booking",
        element: <Booking></Booking>,
      },
    ],
  },
]);

export default router;
