import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inventory from "./components/Inventory/Inventory";
import Home from "./components/Layout/Home";
import cartProductLoader from "./components/loaders/cartProductLoader";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import AuthProviders from "./components/providers/AuthProviders";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
        loader: cartProductLoader,
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
