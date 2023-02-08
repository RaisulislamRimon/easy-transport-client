import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Routes/Routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  );
};

export default App;
